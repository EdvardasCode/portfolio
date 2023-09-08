import { useGLTF, Html } from "@react-three/drei"
import { useControls } from "leva"

export default function PictureKyoto(props) {
  const { nodes } = useGLTF("pictureKyoto.glb")
  const { picture_kyoto } = useControls({
    picture_kyoto: "#c9ffd9",
  })
  return (
    <>
      <group {...props}>
        <group scale={0.123}>
          <mesh castShadow geometry={nodes.Cube104.geometry}>
            <meshStandardMaterial color={picture_kyoto} />
          </mesh>
        </group>
        <Html
          transform={true}
          position={[-0.011, -0.005, 0.001]}
          occlude="blending"
          scale={0.0045}
        >
          <img src="Kyoto.jpg" />
        </Html>
      </group>
    </>
  )
}
