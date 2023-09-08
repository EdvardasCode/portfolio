import { useGLTF } from "@react-three/drei"
import Computer from "./components/Computer"
import DeskSet from "./components/DeskSetup"
import PictureKobe from "./components/PictureKobe"
import PictureKyoto from "./components/PictureKyoto"
import PotTree from "./components/PotTree"
import ReactLogo from "./components/ReactLogo"
import Shelves from "./components/Shelves"
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
      <DeskSet position-y={-0.5} />
      <Shelves position-y={-0.4} />
      <ReactLogo position-y={-0.4} />
      <Wall />
    </>
  )
}
