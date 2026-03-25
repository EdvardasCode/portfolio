import { useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import * as THREE from "three"
import {
  PASSWORD,
  BOOT_MESSAGE,
  WELCOME_BANNER,
  executeCommand,
} from "./terminalCommands"

const CANVAS_WIDTH = 2560
const CANVAS_HEIGHT = 1520
const PADDING = 40
const LINE_HEIGHT = 32
const FONT = "22px 'Courier New', Courier, monospace"
const VISIBLE_LINES = Math.floor((CANVAS_HEIGHT - 2 * PADDING) / LINE_HEIGHT)
const BRIGHT_COLOR = "#ffb000"
const DIM_COLOR = "#996800"
const BACKGROUND_COLOR = "#0a0800"
const TYPEWRITER_DELAY_MS = 25
const CURSOR_BLINK_INTERVAL_MS = 500

const TerminalCanvas = forwardRef(function TerminalCanvas(
  { onTextureReady },
  ref
) {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const textureRef = useRef(null)
  const bootedRef = useRef(false)

  const outputLines = useRef([])
  const displayedText = useRef("")
  const isAnimating = useRef(false)
  const inputValue = useRef("")
  const loggedIn = useRef(false)
  const loginPhase = useRef(null)
  const scrollOffset = useRef(0)
  const focused = useRef(false)
  const cursorVisible = useRef(false)
  const fullTextRef = useRef("")
  const onAnimationCompleteRef = useRef(null)
  const typewriterTimeoutRef = useRef(null)
  const blinkIntervalRef = useRef(null)
  const charWidthRef = useRef(0)
  const keydownHandlerRef = useRef(null)

  function redraw() {
    const context = contextRef.current
    const texture = textureRef.current
    if (!context || !texture) return

    context.fillStyle = BACKGROUND_COLOR
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    context.font = FONT

    const allLines = [...outputLines.current]

    if (displayedText.current) {
      const animatedLines = displayedText.current.split("\n")
      allLines.push(...animatedLines)
    }

    const shouldShowPrompt = !isAnimating.current && (loggedIn.current || loginPhase.current)
    if (shouldShowPrompt) {
      const promptLine = buildPromptLine()
      allLines.push(promptLine)
    }

    const totalLines = allLines.length
    const maxScrollOffset = Math.max(0, totalLines - VISIBLE_LINES)
    scrollOffset.current = Math.min(scrollOffset.current, maxScrollOffset)

    const startIndex = Math.max(0, totalLines - VISIBLE_LINES - scrollOffset.current)
    const endIndex = Math.min(totalLines, startIndex + VISIBLE_LINES)
    const visibleLines = allLines.slice(startIndex, endIndex)

    for (let i = 0; i < visibleLines.length; i++) {
      const line = visibleLines[i]
      const isPromptLine =
        line.startsWith(">") ||
        line.startsWith("login:") ||
        line.startsWith("password:")
      context.fillStyle = isPromptLine ? BRIGHT_COLOR : DIM_COLOR
      context.fillText(line, PADDING, PADDING + LINE_HEIGHT * (i + 1))
    }

    if (focused.current && !isAnimating.current && cursorVisible.current && shouldShowPrompt) {
      const lastVisibleIndex = visibleLines.length - 1
      if (lastVisibleIndex >= 0) {
        const lastLine = visibleLines[lastVisibleIndex]
        const cursorX = PADDING + lastLine.length * charWidthRef.current
        const cursorY = PADDING + LINE_HEIGHT * lastVisibleIndex + LINE_HEIGHT - 14
        context.fillStyle = BRIGHT_COLOR
        context.fillRect(cursorX, cursorY, charWidthRef.current, LINE_HEIGHT)
      }
    }

    texture.needsUpdate = true
  }

  function buildPromptLine() {
    if (loggedIn.current) {
      return "> " + inputValue.current
    }
    if (loginPhase.current === "username") {
      return "login: " + inputValue.current
    }
    if (loginPhase.current === "password") {
      return "password: " + "*".repeat(inputValue.current.length)
    }
    return ""
  }

  function animateText(lines, onComplete) {
    const joinedText = lines.join("\n")
    fullTextRef.current = joinedText
    onAnimationCompleteRef.current = onComplete || null
    displayedText.current = ""
    isAnimating.current = true
    let charIndex = 0

    function revealNextCharacter() {
      if (charIndex >= joinedText.length) {
        finishAnimation()
        return
      }
      charIndex++
      displayedText.current = joinedText.slice(0, charIndex)
      redraw()
      typewriterTimeoutRef.current = setTimeout(revealNextCharacter, TYPEWRITER_DELAY_MS)
    }

    revealNextCharacter()
  }

  function finishAnimation() {
    isAnimating.current = false
    const completedLines = fullTextRef.current.split("\n")
    outputLines.current.push(...completedLines)
    displayedText.current = ""
    fullTextRef.current = ""
    const callback = onAnimationCompleteRef.current
    onAnimationCompleteRef.current = null
    if (callback) {
      callback()
    }
    redraw()
  }

  function skipAnimation() {
    if (!isAnimating.current) return
    clearTimeout(typewriterTimeoutRef.current)
    finishAnimation()
  }

  function handleKeyDown(event) {
    if (isAnimating.current) {
      event.preventDefault()
      skipAnimation()
      return
    }

    if (event.key === "Enter") {
      event.preventDefault()
      handleSubmit()
      return
    }

    if (event.key === "Backspace") {
      event.preventDefault()
      inputValue.current = inputValue.current.slice(0, -1)
      redraw()
      return
    }

    if (event.shiftKey && event.key === "ArrowUp") {
      event.preventDefault()
      scrollOffset.current = Math.min(
        scrollOffset.current + 1,
        Math.max(0, outputLines.current.length - VISIBLE_LINES)
      )
      redraw()
      return
    }

    if (event.shiftKey && event.key === "ArrowDown") {
      event.preventDefault()
      scrollOffset.current = Math.max(0, scrollOffset.current - 1)
      redraw()
      return
    }

    if (event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
      event.preventDefault()
      inputValue.current += event.key
      redraw()
      return
    }
  }

  function handleSubmit() {
    const value = inputValue.current
    inputValue.current = ""

    if (loginPhase.current === "username") {
      if (!value) {
        redraw()
        return
      }
      outputLines.current.push("login: " + value)
      loginPhase.current = "password"
      redraw()
      return
    }

    if (loginPhase.current === "password") {
      outputLines.current.push("password: " + "*".repeat(value.length))
      if (value === PASSWORD) {
        loggedIn.current = true
        loginPhase.current = null
        animateText(WELCOME_BANNER)
        return
      }
      animateText(["Access denied."])
      return
    }

    if (loggedIn.current) {
      outputLines.current.push("> " + value)
      if (!value) {
        redraw()
        return
      }
      const result = executeCommand(value)
      if (result === null) {
        outputLines.current = []
        scrollOffset.current = 0
        redraw()
        return
      }
      animateText(result)
      return
    }
  }

  useImperativeHandle(ref, () => ({
    focus() {
      if (focused.current) return
      focused.current = true
      cursorVisible.current = true
      blinkIntervalRef.current = setInterval(() => {
        cursorVisible.current = !cursorVisible.current
        redraw()
      }, CURSOR_BLINK_INTERVAL_MS)
      keydownHandlerRef.current = handleKeyDown
      window.addEventListener("keydown", keydownHandlerRef.current)
      redraw()
    },
    blur() {
      focused.current = false
      cursorVisible.current = false
      clearInterval(blinkIntervalRef.current)
      blinkIntervalRef.current = null
      if (keydownHandlerRef.current) {
        window.removeEventListener("keydown", keydownHandlerRef.current)
        keydownHandlerRef.current = null
      }
      redraw()
    },
  }))

  useEffect(() => {
    if (bootedRef.current) return
    bootedRef.current = true

    const canvas = document.createElement("canvas")
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    canvasRef.current = canvas

    const context = canvas.getContext("2d")
    context.font = FONT
    contextRef.current = context

    charWidthRef.current = context.measureText("M").width

    const texture = new THREE.CanvasTexture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.needsUpdate = true
    textureRef.current = texture

    redraw()

    if (onTextureReady) {
      onTextureReady(texture)
    }

    animateText(BOOT_MESSAGE, () => {
      loginPhase.current = "username"
      redraw()
    })

    return () => {
      if (textureRef.current) {
        textureRef.current.dispose()
      }
      clearInterval(blinkIntervalRef.current)
      clearTimeout(typewriterTimeoutRef.current)
      if (keydownHandlerRef.current) {
        window.removeEventListener("keydown", keydownHandlerRef.current)
      }
    }
  }, [])

  return null
})

export default TerminalCanvas
