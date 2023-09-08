import React from "react"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"

export default function Shelves(props) {
  const { nodes } = useGLTF("/shelf-support.glb")
  const { nodes: shelfs } = useGLTF("/top-shelf.glb")
  const { shelf_support, shelf } = useControls({
    shelf_support: "#8B8061",
    shelf: "#799982",
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={shelfs.topShelf.geometry}
        position={[0.114, 0.978, -0.505]}
        scale={0.035}
      >
        <meshStandardMaterial color={shelf} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={shelfs.topShelf.geometry}
        position={[0.114, 0.654, -0.505]}
        scale={0.035}
      >
        <meshStandardMaterial color={shelf} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelfHolder.geometry}
        position={[0.95, 0.981, -0.504]}
        scale={0.009}
      >
        <meshStandardMaterial color={shelf_support} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelfHolder001.geometry}
        position={[0.266, 0.982, -0.503]}
        scale={0.009}
      >
        <meshStandardMaterial color={shelf_support} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelfHolder003.geometry}
        position={[0.964, 0.658, -0.504]}
        scale={0.009}
      >
        <meshStandardMaterial color={shelf_support} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelfHolder002.geometry}
        position={[0.268, 0.658, -0.503]}
        scale={0.009}
      >
        <meshStandardMaterial color={shelf_support} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/shelf-support.glb")
useGLTF.preload("/top-shelf.glb")
