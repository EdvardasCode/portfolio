import { useGLTF, Environment } from "@react-three/drei"
import PictureKobe from "./components/PictureKobe"
import PictureKyoto from "./components/PictureKyoto"

export default function Experience(props) {
  const gltf = useGLTF("desk-set.glb")
  const wall = useGLTF("wall.glb")
  return (
    <>
      <Environment preset="city" />
      <PictureKobe position={[-0.7, 0.2, -0.53]} />
      <PictureKyoto position={[-0.1, 0.5, -0.53]} />
      <primitive object={gltf.scene} scale={1} position-y={-0.5} />
      <primitive object={wall.scene} scale={1} position-y={-0.5} />
    </>
  )
}
