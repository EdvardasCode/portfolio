import { useGLTF, Html } from "@react-three/drei"
import { useControls } from "leva"

export default function PictureKobe(props) {
  const { nodes } = useGLTF("pictureKobe.glb")

  const { picture_kobe } = useControls({
    picture_kobe: "#C9FFD9",
  })

  return (
    <>
      <group {...props}>
        <group rotation={[0, 0, Math.PI / 2]} scale={0.14}>
          <mesh castShadow geometry={nodes.Cube105.geometry}>
            <meshStandardMaterial color={picture_kobe} />
          </mesh>
        </group>
        <Html
          scale={0.028}
          transform={true}
          position={[0, 0.025, 0.001]}
          occlude="blending"
        >
          <img src="Kobe.gif" />
        </Html>
      </group>
    </>
  )
}
