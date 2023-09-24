import { create } from "zustand"

export default create((set) => {
  return {
    cameraPosition: "far",
    moveForward: () => {
      set(({ cameraPosition }) => {
        if (cameraPosition === "far") return { cameraPosition: "mid" }
        if (cameraPosition === "mid") return { cameraPosition: "close" }
      })
    },
    moveBackward: () => {
      set(({ cameraPosition }) => {
        if (cameraPosition === "close") return { cameraPosition: "mid" }
        if (cameraPosition === "mid") return { cameraPosition: "far" }
      })
    },
  }
})
