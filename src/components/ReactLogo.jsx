import React from "react"
import { Float, useGLTF } from "@react-three/drei"
Float
export default function ReactLogo(props) {
  const reactLogo = useGLTF("/react.glb")
  return (
    <Float
      floatingRange={[0.1, 0.001]}
      speed={4}
      floatIntensity={0.3}
      rotationIntensity={0.5}
    >
      <primitive {...props} object={reactLogo.scene} />
    </Float>
  )
}

useGLTF.preload("/react.glb")
