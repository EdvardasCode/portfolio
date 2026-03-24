import React, { useEffect, useState } from "react"
import { useGLTF } from "@react-three/drei"

const SEGMENT_ACTIVE_DIGITS = [
  [4, 5, 6, 8, 9, 0],
  [1, 2, 3, 4, 7, 8, 9, 0],
  [2, 6, 8, 0],
  [1, 3, 4, 5, 6, 7, 8, 9, 0],
  [2, 3, 5, 6, 7, 8, 9, 0],
  [2, 3, 4, 5, 6, 8, 9],
  [2, 3, 5, 6, 8, 9, 0],
]

const SEGMENT_TYPES = [
  { x: -0.011, y: 0.054, rotation: [0, 0, -0.625], scale: [0.035, 0.005, 0.007] },
  { x: -0.011, y: 0.054, rotation: [0, 0, -0.625], scale: [0.035, 0.005, 0.007] },
  { x: 0.068, y: -0.003, rotation: [0, 0, -0.625], scale: [0.035, 0.005, 0.007] },
  { x: 0.068, y: -0.003, rotation: [0, 0, -0.625], scale: [0.035, 0.005, 0.007] },
  { x: -0.047, y: 0.08, rotation: [Math.PI / 2, 0.946, -Math.PI / 2], scale: [0.019, 0.005, 0.007] },
  { x: 0.028, y: 0.026, rotation: [Math.PI / 2, 0.946, -Math.PI / 2], scale: [0.019, 0.005, 0.007] },
  { x: 0.104, y: -0.029, rotation: [Math.PI / 2, 0.946, -Math.PI / 2], scale: [0.019, 0.005, 0.007] },
]

const DIGIT_Z_OFFSETS = [
  [0.176, 0.122, 0.176, 0.122, 0.149, 0.149, 0.149],
  [0.088, 0.034, 0.088, 0.034, 0.061, 0.06, 0.061],
  [-0.03, -0.085, -0.03, -0.085, -0.058, -0.058, -0.057],
  [-0.116, -0.171, -0.116, -0.171, -0.144, -0.144, -0.144],
]

function segmentNodeKey(digitIndex, segmentIndex) {
  return `Cube${String(digitIndex * 7 + segmentIndex + 1).padStart(3, "0")}`
}

export default function Clock(props) {
  const { nodes, materials } = useGLTF("/clock.glb")
  const [timeDigits, setTimeDigits] = useState([])
  const [colonVisible, setColonVisible] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      setTimeDigits((hours + minutes).split("").map(Number))
      setColonVisible((previous) => !previous)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <group
      {...props}
      dispose={null}
      rotation-y={-Math.PI * 0.4}
      scale={0.2}
      position={[-0.35, -0.33, -0.15]}
    >
      <mesh geometry={nodes.Cube.geometry} material={materials.clock} />

      {[0, 1, 2, 3].map((digitIndex) =>
        SEGMENT_TYPES.map((segmentType, segmentIndex) => {
          const isActive = SEGMENT_ACTIVE_DIGITS[segmentIndex].includes(
            timeDigits[digitIndex]
          )
          return (
            <mesh
              key={`${digitIndex}-${segmentIndex}`}
              geometry={nodes[segmentNodeKey(digitIndex, segmentIndex)].geometry}
              position={[
                segmentType.x,
                segmentType.y,
                DIGIT_Z_OFFSETS[digitIndex][segmentIndex],
              ]}
              rotation={segmentType.rotation}
              scale={segmentType.scale}
            >
              <meshStandardMaterial color={isActive ? "red" : "#414141"} />
            </mesh>
          )
        })
      )}

      <mesh
        geometry={nodes.Cube029.geometry}
        position={[-0.009, 0.053, 0]}
        rotation={[0, 0, -0.665]}
        scale={[-0.006, -0.005, -0.007]}
      >
        <meshStandardMaterial color={colonVisible ? "red" : "#414141"} />
      </mesh>
      <mesh
        geometry={nodes.Cube030.geometry}
        position={[0.069, -0.004, 0]}
        rotation={[0, 0, -0.665]}
        scale={[-0.006, -0.005, -0.007]}
      >
        <meshStandardMaterial color={colonVisible ? "red" : "#414141"} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/clock.glb")
