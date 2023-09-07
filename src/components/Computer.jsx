import { useGLTF } from "@react-three/drei"

export default function Computer({ position }) {
  const computer = useGLTF("computer.glb")

  return (
    <>
      <primitive object={computer.scene} scale={1} position={position} />
    </>
  )
}
