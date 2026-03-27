import { useGLTF } from "@react-three/drei";

export function Hologram(props) {
  const { scene } = useGLTF("Dumbbell.glb");

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}
