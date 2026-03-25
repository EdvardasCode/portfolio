import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import TerminalCanvas from "./TerminalCanvas";

export default function Computer(props) {
  const { nodes, materials } = useGLTF("/monitor.glb");
  const { nodes: cableNodes } = useGLTF("/cables.glb");

  const [screenTexture, setScreenTexture] = useState(null);
  const terminalRef = useRef(null);

  const { cable_color, monitor_color } = useControls({
    cable_color: "#000000",
    monitor_color: "#A0A7A3",
  });

  const { screenPosition, screenSize } = useControls("screen", {
    screenPosition: { value: [0, 0.52, -0.13], step: 0.01 },
    screenSize: { value: [0.56, 0.31], step: 0.005 },
  });

  const handleScreenClick = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    terminalRef.current?.focus();
  };

  return (
    <group {...props} dispose={null} onPointerMissed={() => terminalRef.current?.blur()}>
      <group position={[0.066, 0.352, -0.28]} scale={0.051}>
        <mesh castShadow receiveShadow geometry={nodes.Cube103.geometry}>
          <meshStandardMaterial color={monitor_color} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube103_1.geometry}
          material={materials.br}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={cableNodes.cable.geometry}
          position={[0.11, -0.5, -1.4]}
          scale={6}
        >
          <meshStandardMaterial color={cable_color} />
        </mesh>
      </group>
      <mesh
        position={screenPosition}
        onClick={handleScreenClick}
      >
        <planeGeometry args={screenSize} />
        {screenTexture ? (
          <meshStandardMaterial
            map={screenTexture}
            emissive="#ffb000"
            emissiveIntensity={0.1}
          />
        ) : (
          <meshStandardMaterial color="#0a0800" />
        )}
      </mesh>
      <TerminalCanvas ref={terminalRef} onTextureReady={setScreenTexture} />
    </group>
  );
}

useGLTF.preload("/monitor.glb");
