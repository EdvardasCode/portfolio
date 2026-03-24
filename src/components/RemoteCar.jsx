import { Box, Cylinder, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RigidBody, useRevoluteJoint } from "@react-three/rapier"
import { createRef, useRef } from "react"

const WheelJoint = ({ body, wheel, bodyAnchor, wheelAnchor, rotationAxis }) => {
  const joint = useRevoluteJoint(body, wheel, [
    bodyAnchor,
    wheelAnchor,
    rotationAxis,
  ])

  useFrame(() => {
    if (joint.current) {
      joint.current.configureMotorVelocity(20, 10)
    }
  })

  return null
}

export default function RemoteCar() {
  const bodyRef = useRef(null)

  const { nodes, materials } = useGLTF("/car-remote.glb")
  return (
    <group
      position={[0.631, 0.132, -0.208]}
      rotation={[-Math.PI, 0.211, -Math.PI]}
      scale={0.07}
    >
      <RigidBody colliders="cuboid" ref={bodyRef} type="dynamic">
        <group name="chassis">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body002.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body002_1.geometry}
            material={materials.paintGreen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body002_2.geometry}
            material={materials.lightFront}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body002_3.geometry}
            material={materials["_defaultMat.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body002_4.geometry}
            material={materials.window}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body002_5.geometry}
            material={materials.lightBack}
          />
        </group>
      </RigidBody>
      <RigidBody colliders="hull">
        <group
          position={[-0.35, 0.3, 0.76]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.003"]}
          />
        </group>
        <group position={[0.35, 0.3, 0.76]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.003"]}
          />
        </group>
        <group
          position={[-0.35, 0.3, -0.86]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.003"]}
          />
        </group>
        <group position={[0.35, 0.3, -0.86]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.003"]}
          />
        </group>
      </RigidBody>
    </group>
  )
}
