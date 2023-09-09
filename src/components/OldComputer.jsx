import React from "react"
import { useGLTF } from "@react-three/drei"

export default function OldComputer(props) {
  const { nodes, materials } = useGLTF("/old-school-PC.glb")
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.05, -0.33, -0.25]}
        scale={[0.15, 0.1, 0.12]}
        rotation-y={-Math.PI * 0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_1.geometry}
          material={materials.cream}
        />
        <mesh geometry={nodes.Computer_2.geometry} material={materials.black} />
        <mesh geometry={nodes.Computer_3.geometry} material={materials.red} />
        <mesh
          geometry={nodes.Computer_4.geometry}
          material={materials.lightCream}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/old-school-PC.glb")
