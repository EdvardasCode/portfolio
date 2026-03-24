import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Vector3, Quaternion } from "three";

const ACCELERATION = 10;
const MAX_SPEED = 30;

export default function RemoteCar(props) {
  const { scene } = useGLTF("/car-remote.glb");
  const chassisBody = useRef(null);
  const driveDirection = useRef(null);

  useFrame(() => {
    const chassis = chassisBody.current;
    if (!chassis || !driveDirection.current) return;

    const rotation = chassis.rotation();
    const chassisQuat = new Quaternion(
      rotation.x,
      rotation.y,
      rotation.z,
      rotation.w,
    );
    const forward = new Vector3(0, 0, 1).applyQuaternion(chassisQuat);
    const currentVelocity = chassis.linvel();
    const speed = new Vector3(currentVelocity.x, 0, currentVelocity.z).length();
    if (speed >= MAX_SPEED) return;

    const sign = driveDirection.current === "forward" ? 1 : -1;
    chassis.applyImpulse(
      {
        x: forward.x * ACCELERATION * sign,
        y: 0,
        z: forward.z * ACCELERATION * sign,
      },
      true,
    );
  });

  const drive = (direction) => {
    driveDirection.current = direction;
  };

  const stop = () => {
    driveDirection.current = null;
  };

  return (
    <RigidBody
      ref={chassisBody}
      mass={1500}
      position={[0.631, 0.132, -0.208]}
      rotation={[-Math.PI, 0.211, -Math.PI]}
      colliders="hull"
      friction={1.5}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <primitive object={scene} scale={0.6} />
    </RigidBody>
  );
}
