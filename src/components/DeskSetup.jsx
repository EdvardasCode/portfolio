import React from "react"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"
import { RigidBody } from "@react-three/rapier"

export default function DeskSet(props) {
  const { nodes } = useGLTF("/desk-set.glb")
  const { mouse_pad, table, paper, book_cover_1, book_cover_2, book_cover_3 } =
    useControls({
      mouse_pad: "#F9F9F9",
      table: "#784A3C",
      paper: "#ffffff",
      book_cover_1: "#9B5A45",
      book_cover_2: "#9B5A45",
      book_cover_3: "#454545",
    })

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.pad.geometry}
        position={[-0.456, 0.2, 0.366]}
        scale={0.069}
      >
        <meshStandardMaterial color={mouse_pad} />
      </mesh>

      <RigidBody type="fixed">
        <mesh
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={[0.001, 0.106, 0]}
          scale={[0.493, 0.245, 0.308]}
        >
          <meshStandardMaterial color={table} />
        </mesh>
      </RigidBody>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        position={[-0.058, 0.254, -0.299]}
        scale={[0.75, 0.494, 0.2]}
      >
        <meshStandardMaterial color={table} />
      </mesh>
      <mesh
        receiveShadow
        geometry={nodes.Cube006.geometry}
        position={[-0.626, 0.222, -0.247]}
        rotation={[Math.PI, 0.048, -3.141]}
        scale={[0.1, 0.015, 0.15]}
      >
        <meshStandardMaterial color={paper} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cover.geometry}
        position={[-0.624, 0.239, -0.247]}
        rotation={[Math.PI, 0.048, -3.141]}
        scale={[0.102, 0.0015, 0.152]}
      >
        <meshStandardMaterial color={book_cover_1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cover001.geometry}
        position={[-0.624, 0.203, -0.28]}
        rotation={[Math.PI, -0.112, -3.141]}
        scale={[0.102, 0.0015, 0.152]}
      >
        <meshStandardMaterial color={book_cover_2} />
      </mesh>
      <mesh
        receiveShadow
        geometry={nodes.Cube005.geometry}
        position={[-0.626, 0.186, -0.28]}
        rotation={[Math.PI, -0.112, -3.141]}
        scale={[0.1, 0.015, 0.15]}
      >
        <meshStandardMaterial color={paper} />
      </mesh>
      <mesh
        receiveShadow
        geometry={nodes.Cube002.geometry}
        position={[-0.64, 0.15, -0.244]}
        rotation={[0, 0.021, 0]}
        scale={[0.1, 0.015, 0.15]}
      >
        <meshStandardMaterial color={paper} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cover002.geometry}
        position={[-0.642, 0.167, -0.245]}
        rotation={[0, 0.021, 0]}
        scale={[0.102, 0.0015, 0.152]}
      >
        <meshStandardMaterial color={book_cover_3} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/desk-set.glb")
