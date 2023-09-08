import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"

export default function Wall(props) {
  const { nodes } = useGLTF("/wall.glb")

  const { wall_color } = useControls({
    wall_color: "#CCBBA1",
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.wall.geometry}
        position={[-0.124, 0.414, -0.556]}
        scale={[1.309, 1.144, 0.016]}
      >
        <meshStandardMaterial color={wall_color} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/wall.glb")
