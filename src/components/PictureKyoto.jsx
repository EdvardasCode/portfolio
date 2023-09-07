import { useGLTF, Html } from "@react-three/drei"

export default function PictureKyoto({ position }) {
  const pictureKyoto = useGLTF("pictureKyoto.glb")

  return (
    <>
      <primitive object={pictureKyoto.scene} scale={1.6} position={position}>
        <Html
          transform={true}
          position={[-0.011, -0.005, 0.001]}
          distanceFactor={1}
          occlude="blending"
        >
          <img src="Kyoto.jpg" width={77} />
        </Html>
      </primitive>
    </>
  )
}
