import { useRef, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Vector3, Quaternion } from "three";

const ACCELERATION = 0.0004;
const MAX_SPEED = 0.3;
const WHEEL_SPIN_FACTOR = 15;

const WHEEL_NAMES = [
  "wheel_backLeft",
  "wheel_backRight",
  "wheel_frontLeft",
  "wheel_frontRight",
];

export default function RemoteCar(props) {
  const { scene } = useGLTF("/car.glb");
  const chassisBody = useRef(null);
  const [driving, setDriving] = useState(false);

  const wheels = useMemo(() => {
    return WHEEL_NAMES.map((name) => scene.getObjectByName(name)).filter(
      Boolean,
    );
  }, [scene]);

  useFrame((_, delta) => {
    const chassis = chassisBody.current;
    if (!chassis) return;

    const currentVelocity = chassis.linvel();
    const speed = new Vector3(currentVelocity.x, 0, currentVelocity.z).length();

    wheels.forEach((wheel) => {
      wheel.rotation.x += speed * WHEEL_SPIN_FACTOR * delta;
    });

    if (!driving) return;
    if (speed >= MAX_SPEED) return;

    const rotation = chassis.rotation();
    const chassisQuat = new Quaternion(
      rotation.x,
      rotation.y,
      rotation.z,
      rotation.w,
    );
    const forward = new Vector3(0, 0, 1).applyQuaternion(chassisQuat);

    chassis.applyImpulse(
      {
        x: forward.x * ACCELERATION,
        y: 0,
        z: forward.z * ACCELERATION,
      },
      true,
    );
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setDriving((prev) => !prev);
  };

  return (
    <group onClick={handleClick}>
      <RigidBody
        ref={chassisBody}
        mass={1}
        position={[0.6, 0.0005, -0.2]}
        rotation={[0, -25 * (Math.PI / 180), 0]}
        colliders="hull"
        friction={1.5}
        linearDamping={0.5}
        angularDamping={0.5}
        ccd
      >
        <primitive object={scene} scale={0.04} />
      </RigidBody>
    </group>
  );
}
