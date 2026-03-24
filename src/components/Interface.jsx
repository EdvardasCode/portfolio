import React from "react"
import useStore from "../store/useStore"

export default function Interface(props) {
  const { cameraZoom, zoomIn, zoomOut } = useStore()
  return (
    <div className="interface">
      <div className="wrapper">
        <button
          className={cameraZoom === "close" ? "forward active" : "forward"}
          onClick={() => {
            zoomIn()
          }}
        >
          ↑
        </button>
        <button
          className={cameraZoom === "far" ? "backward active" : "backward"}
          onClick={() => {
            zoomOut()
          }}
        >
          ↓
        </button>
      </div>
    </div>
  )
}
