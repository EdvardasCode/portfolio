import "./style.css"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience.jsx"
import { OrbitControls } from "@react-three/drei"
import Interface from "./components/Interface"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <>
    <Canvas
      pixelratio={window.devicePixelRatio}
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [0, 0, 1.5],
      }}
    >
      {/* <OrbitControls makeDefault /> */}
      <Experience />
    </Canvas>
    <Interface />
  </>
)
