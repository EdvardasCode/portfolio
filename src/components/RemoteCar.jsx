import React from "react"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"
import { RigidBody } from "@react-three/rapier"

export default function RemoteCar(props) {
  const { nodes, materials } = useGLTF("/car-remote.glb")
  const { remote_car } = useControls({
    remote_car: "#41323d",
  })
  return (
    <group {...props} dispose={null}>
      <RigidBody colliders="hull">
        <group
          position={[0.631, 0.5, -0.208]}
          rotation={[-Math.PI, 0.211, -Math.PI]}
          scale={0.07}
        >
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
          <mesh castShadow receiveShadow geometry={nodes.Mesh_body002.geometry}>
            <meshStandardMaterial color={remote_car} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body002_1.geometry}
          >
            <meshStandardMaterial color={remote_car} />
          </mesh>
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
      <group
        position={[0.433, 0.14, -0.019]}
        rotation={[-Math.PI / 2, 0, -0.422]}
        scale={0.009}
      >
        <mesh castShadow receiveShadow geometry={nodes.Cube092.geometry}>
          <meshStandardMaterial color={remote_car} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_1.geometry}
          material={materials.greenGO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_2.geometry}
          material={materials.redSTOP}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/car-remote.glb")
