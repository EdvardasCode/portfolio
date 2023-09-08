import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"

export default function Computer(props) {
  const { nodes, materials } = useGLTF("/monitor.glb")
  const { nodes: cable } = useGLTF("/cables.glb")

  const { cable_color, monitor_color } = useControls({
    cable_color: "#000000",
    monitor_color: "#A0A7A3",
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0.066, 0.352, -0.28]} scale={0.051}>
        <mesh castShadow receiveShadow geometry={nodes.Cube103.geometry}>
          <meshStandardMaterial color={monitor_color} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube103_1.geometry}
          material={materials.br}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={cable.cable.geometry}
          position={[0.11, -0.5, -1.4]}
          scale={6}
        >
          <meshStandardMaterial color={cable_color} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload("/monitor.glb")
