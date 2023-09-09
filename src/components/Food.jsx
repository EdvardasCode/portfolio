import React from "react"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"

export default function Food(props) {
  const { nodes, materials } = useGLTF("/food.glb")
  const { tableware } = useControls({
    tableware: "#F9F9F9",
  })
  return (
    <group {...props} dispose={null}>
      <group position={[-0.641, 0.131, 0.427]} scale={0.312}>
        <mesh castShadow geometry={nodes.Mesh_cupTea.geometry}>
          <meshStandardMaterial color={tableware} />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Mesh_cupTea_1.geometry}
          material={materials.brownDarkest}
        />
      </group>
      <mesh
        castShadow
        geometry={nodes.croissant.geometry}
        material={materials.brown}
        position={[-0.622, 0.144, 0.296]}
        rotation={[0, 0.268, 0]}
        scale={0.153}
      />
      <mesh
        castShadow
        geometry={nodes.plateRectangle.geometry}
        position={[-0.626, 0.131, 0.299]}
        rotation={[0, -0.493, 0]}
        scale={0.161}
      >
        <meshStandardMaterial color={tableware} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/food.glb")
