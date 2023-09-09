import { BakeShadows, useGLTF } from "@react-three/drei"
import Computer from "./components/Computer"
import DeskSet from "./components/DeskSetup"
import Food from "./components/Food"
import PictureKobe from "./components/PictureKobe"
import PictureKyoto from "./components/PictureKyoto"
import PotTree from "./components/PotTree"
import ReactLogo from "./components/ReactLogo"
import RemoteCar from "./components/RemoteCar"
import Shelves from "./components/Shelves"
import Wall from "./components/Wall"

export default function Experience(props) {
  return (
    <>
      {/* Shadows and lights */}
      <BakeShadows />
      <ambientLight intensity={0.5} />
      <directionalLight
        color="beige"
        position={[1, 2, 3]}
        castShadow
        shadow-mapSize={[2024, 2024]}
        intensity={0.6}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-0.6}
        shadow-camera-left={-5}
        shadow-normalBias={0.04}
      />

      {/* Components */}
      <PictureKobe position={[-0.7, 0.2, -0.53]} />
      <PictureKyoto position={[-0.1, 0.5, -0.53]} />
      <PotTree position={[-0.1, -0.56, 0.1]} />
      <Computer position={[0, -0.5, 0]} />
      <DeskSet position-y={-0.5} />
      <Shelves position-y={-0.4} />
      <ReactLogo position-y={-0.4} />
      <Wall />
      <RemoteCar position-y={-0.499} />
      <Food position-y={-0.499} />
    </>
  )
}
