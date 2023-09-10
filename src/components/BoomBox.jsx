import React, { useEffect, useState } from "react"
import { useGLTF } from "@react-three/drei"

export default function BoomBox(props) {
  const { nodes, materials } = useGLTF("/boom.glb")
  const [playing, setPlaying] = useState(false)
  const [song] = useState(() => new Audio("/rose-garden.mp3"))

  useEffect(() => {
    if (playing) {
      song.play()
    } else {
      song.pause()
      song.currentTime = 0
    }
  }, [playing])

  return (
    <group
      {...props}
      dispose={null}
      scale={0.07}
      rotation-y={-Math.PI * 0.5}
      position={[0.48, 0.37, -0.45]}
      onClick={() => setPlaying((prevState) => !prevState)}
    >
      <mesh
        castShadow
        geometry={nodes.Box.geometry}
        material={materials.knobs}
        position={[0.413, 0.589, 0.915]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Box001.geometry}
        material={materials.knobs}
        position={[0.413, 0.589, 0.667]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Box002.geometry}
        material={materials.knobs}
        position={[0.413, 0.589, -0.69]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Box003.geometry}
        material={materials.knobs}
        position={[0.413, 0.589, -0.931]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Cube001.geometry}
        material={materials.main}
      />
      <mesh
        castShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        geometry={nodes.Cube001_2.geometry}
        material={materials.secondary}
      />
      <mesh
        castShadow
        geometry={nodes.Cube001_3.geometry}
        material={materials.white}
      />
      <mesh
        castShadow
        geometry={nodes.Cube001_4.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube001_5.geometry}
        material={materials.nets}
      />
      <mesh
        castShadow
        geometry={nodes.Cube001_6.geometry}
        material={materials.knobs}
      />
    </group>
  )
}

useGLTF.preload("/boom.glb")
