import { useGLTF, Html } from "@react-three/drei"

export default function PictureKobe({ position }) {
  const pictureKobe = useGLTF("pictureKobe.glb")

  return (
    <>
      <primitive object={pictureKobe.scene} scale={1.3} position={position}>
        <Html transform={true} position={[0, 0.025, 0]} distanceFactor={1}>
          <img src="Kobe.gif" width={132} />
        </Html>
      </primitive>
    </>
  )
}
