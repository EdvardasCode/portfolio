import { Html } from "@react-three/drei"
import { useControls } from "leva"
import { PASSWORD } from "./terminalCommands"

const noteStyle = {
  width: "120px",
  padding: "10px 12px",
  background: "#F5E6A0",
  color: "#3A2E1F",
  fontFamily: "cursive, 'Comic Sans MS', sans-serif",
  fontSize: "14px",
  lineHeight: "1.5",
  userSelect: "none",
  borderRadius: "2px",
}

export default function StickyNote(props) {
  const { notePosition, noteRotation, noteHtmlScale } = useControls("sticky note", {
    notePosition: { value: [-0.35, -0.32, 0.25], step: 0.01 },
    noteRotation: { value: [-Math.PI / 2, 0, 0.15], step: 0.05 },
    noteHtmlScale: { value: 0.008, min: 0.001, max: 0.05, step: 0.001 },
  })

  return (
    <group position={notePosition}>
      <group rotation={noteRotation}>
        <mesh>
          <planeGeometry args={[0.1, 0.1]} />
          <meshStandardMaterial color="#F5E6A0" />
        </mesh>
        <Html
          transform
          position={[0, 0, 0.001]}
          scale={noteHtmlScale}
          pointerEvents="none"
        >
          <div style={noteStyle}>
            <div style={{ fontSize: "16px", marginBottom: "4px" }}>🔑</div>
            <div style={{ fontWeight: "bold" }}>Password:</div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>{PASSWORD}</div>
          </div>
        </Html>
      </group>
    </group>
  )
}
