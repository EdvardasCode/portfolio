import { BakeShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Physics } from "@react-three/rapier";
import BoomBox from "./components/BoomBox";
import Clock from "./components/Clock";
import Computer from "./components/Computer";
import DeskSetup from "./components/DeskSetup";
import Food from "./components/Food";
import OldComputer from "./components/OldComputer";
import PictureKobe from "./components/PictureKobe";
import PictureKyoto from "./components/PictureKyoto";
import PotTree from "./components/PotTree";
import ReactLogo from "./components/ReactLogo";
import RemoteCar from "./components/RemoteCar";
import Shelves from "./components/Shelves";
import Wall from "./components/Wall";
import StickyNote from "./components/StickyNote";
import useStore from "./store/useStore";

export default function Experience(props) {
  const { cameraZoom } = useStore();
  useFrame((state, delta) => {
    const cameraPos = new THREE.Vector3();
    cameraPos.copy(state.camera.position);
    if (cameraZoom === "far") {
      cameraPos.z = 1.5;
      state.camera.position.copy(cameraPos);
    }
    if (cameraZoom === "mid") {
      cameraPos.z = 1;
      state.camera.position.copy(cameraPos);
    }
    if (cameraZoom === "close") {
      cameraPos.z = 0.3;
      cameraPos.y = 0.02;
      state.camera.position.copy(cameraPos);
    }
  });
  return (
    <>
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

      <Physics>
        <PictureKobe position={[-0.85, 0.2, -0.53]} />
        <PictureKyoto position={[-0.1, 0.5, -0.53]} />
        <PotTree position={[-0.1, -0.56, 0.1]} />
        <Computer position={[0, -0.5, 0]} />
        <DeskSetup position-y={-0.5} />
        <Shelves position-y={-0.4} />
        <ReactLogo position-y={-0.4} />
        <Wall />
        <RemoteCar />
        <Food position-y={-0.499} />
        <Food position-y={-0.499} />
        <OldComputer />
        <BoomBox />
        <Clock />
        <StickyNote position={[-0.35, -0.33, 0.25]} />
      </Physics>
    </>
  );
}
