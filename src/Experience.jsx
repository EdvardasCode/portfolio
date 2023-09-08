import { useGLTF } from "@react-three/drei"
import Computer from "./components/Computer"
import PictureKobe from "./components/PictureKobe"
import PictureKyoto from "./components/PictureKyoto"
import PotTree from "./components/PotTree"
import Wall from "./components/Wall"

export default function Experience(props) {
  const gltf = useGLTF("desk-set.glb")
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight color="beige" position={[0, 2, 3]} intensity={0.6} />
      <PictureKobe position={[-0.7, 0.2, -0.53]} />
      <PictureKyoto position={[-0.1, 0.5, -0.53]} />
      <PotTree position={[-0.1, -0.56, 0.1]} />
      <Computer position={[0, -0.5, 0]} />
      <primitive object={gltf.scene} scale={1} position-y={-0.5} />
      <Wall />
    </>
  )
}
