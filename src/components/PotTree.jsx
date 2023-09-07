import { useGLTF } from "@react-three/drei"

export default function PotTree({ position }) {
  const tree = useGLTF("bonzai-tree.glb")

  return (
    <>
      <primitive object={tree.scene} scale={1.2} position={position} />
    </>
  )
}
