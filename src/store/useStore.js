import { create } from "zustand"

export default create((set) => {
  return {
    cameraZoom: "far",
    zoomIn: () => {
      set(({ cameraZoom }) => {
        if (cameraZoom === "far") return { cameraZoom: "mid" }
        if (cameraZoom === "mid") return { cameraZoom: "close" }
        return { cameraZoom: "close" }
      })
    },
    zoomOut: () => {
      set(({ cameraZoom }) => {
        if (cameraZoom === "close") return { cameraZoom: "mid" }
        if (cameraZoom === "mid") return { cameraZoom: "far" }
        return { cameraZoom: "far" }
      })
    },
  }
})
