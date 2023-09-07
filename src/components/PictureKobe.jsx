import { useGLTF, Html } from "@react-three/drei"

export default function PictureKobe({ position }) {
  const pictureKobe = useGLTF("pictureKobe.glb")

  return (
    <>
      <primitive object={pictureKobe.scene} scale={1.3} position={position}>
        <Html
          scale={0.03}
          transform={true}
          position={[0, 0.025, 0.001]}
          occlude="blending"
        >
          <img src="Kobe.gif" />
        </Html>
      </primitive>
    </>
  )
}
