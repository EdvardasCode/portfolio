import React from "react"
import useStore from "../store/useStore"

export default function Interface(props) {
  const { cameraPosition, moveForward, moveBackward } = useStore()
  return (
    <div className="interface">
      <div className="wrapper">
        <button
          className={cameraPosition === "close" ? "forward active" : "forward"}
          onClick={() => {
            moveForward()
          }}
        >
          ↑
        </button>
        <button
          className={cameraPosition === "far" ? "backward active" : "backward"}
          onClick={() => {
            moveBackward()
          }}
        >
          ↓
        </button>
      </div>
    </div>
  )
}
