import React, { useEffect, useState } from "react"
import { useGLTF } from "@react-three/drei"

export default function Clock(props) {
  const { nodes, materials } = useGLTF("/clock.glb")
  const [time, setTime] = useState([])
  const [toggle, setIsToggled] = useState(false)

  useEffect(() => {
    // Set up an interval to update the state every second
    const intervalId = setInterval(() => {
      const currentTime = new Date()
      const timeInArray = `${currentTime.getHours()}${
        currentTime.getMinutes() < 10
          ? "0" + currentTime.getMinutes()
          : currentTime.getMinutes()
      }`
        .split("")
        .map((num) => Number(num))
      setTime(timeInArray)

      // Toggle the 'isToggled' state
      setIsToggled((prevIsToggled) => !prevIsToggled)
    }, 1000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <group
      {...props}
      dispose={null}
      rotation-y={-Math.PI * 0.4}
      scale={0.2}
      position={[-0.35, -0.33, -0.15]}
    >
      <mesh geometry={nodes.Cube.geometry} material={materials.clock} />
      <mesh
        geometry={nodes.Cube001.geometry}
        position={[-0.011, 0.054, 0.176]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[4, 5, 6, 8, 9, 0].includes(time[0]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube002.geometry}
        position={[-0.011, 0.054, 0.122]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 2, 3, 4, 7, 8, 9, 0].includes(time[0]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube003.geometry}
        position={[0.068, -0.003, 0.176]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[2, 6, 8, 0].includes(time[0]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube004.geometry}
        position={[0.068, -0.003, 0.122]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 3, 4, 5, 6, 7, 8, 9, 0].includes(time[0]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube005.geometry}
        position={[-0.047, 0.08, 0.149]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 7, 8, 9, 0].includes(time[0]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube006.geometry}
        position={[0.028, 0.026, 0.149]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 4, 5, 6, 8, 9].includes(time[0]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube007.geometry}
        position={[0.104, -0.029, 0.149]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 8, 9, 0].includes(time[0]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube008.geometry}
        position={[-0.011, 0.054, 0.088]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[4, 5, 6, 8, 9, 0].includes(time[1]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube009.geometry}
        position={[-0.011, 0.054, 0.034]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 2, 3, 4, 7, 8, 9, 0].includes(time[1]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube010.geometry}
        position={[0.068, -0.003, 0.088]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[2, 6, 8, 0].includes(time[1]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube011.geometry}
        position={[0.068, -0.003, 0.034]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 3, 4, 5, 6, 7, 8, 9, 0].includes(time[1]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube012.geometry}
        position={[-0.047, 0.08, 0.061]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 7, 8, 9, 0].includes(time[1]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube013.geometry}
        position={[0.028, 0.026, 0.06]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 4, 5, 6, 8, 9].includes(time[1]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube014.geometry}
        position={[0.104, -0.029, 0.061]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 8, 9, 0].includes(time[1]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube015.geometry}
        position={[-0.011, 0.054, -0.03]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[4, 5, 6, 8, 9, 0].includes(time[2]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube016.geometry}
        position={[-0.011, 0.054, -0.085]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 2, 3, 4, 7, 8, 9, 0].includes(time[2]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube017.geometry}
        position={[0.068, -0.003, -0.03]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[2, 6, 8].includes(time[2]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube018.geometry}
        position={[0.068, -0.003, -0.085]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 3, 4, 5, 6, 7, 8, 9, 0].includes(time[2]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube019.geometry}
        position={[-0.047, 0.08, -0.058]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 7, 8, 9, 0].includes(time[2]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube020.geometry}
        position={[0.028, 0.026, -0.058]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 4, 5, 6, 8, 9].includes(time[2]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube021.geometry}
        position={[0.104, -0.029, -0.057]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 8, 9, 0].includes(time[2]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube022.geometry}
        position={[-0.011, 0.054, -0.116]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[4, 5, 6, 8, 9, 0].includes(time[3]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube023.geometry}
        position={[-0.011, 0.054, -0.171]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 2, 3, 4, 7, 8, 9, 0].includes(time[3]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube024.geometry}
        position={[0.068, -0.003, -0.116]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[2, 6, 8, 0].includes(time[3]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube025.geometry}
        position={[0.068, -0.003, -0.171]}
        rotation={[0, 0, -0.625]}
        scale={[0.035, 0.005, 0.007]}
      >
        {[1, 3, 4, 5, 6, 7, 8, 9, 0].includes(time[3]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube026.geometry}
        position={[-0.047, 0.08, -0.144]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 7, 8, 9, 0].includes(time[3]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube027.geometry}
        position={[0.028, 0.026, -0.144]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 4, 5, 6, 8, 9].includes(time[3]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube028.geometry}
        position={[0.104, -0.029, -0.144]}
        rotation={[Math.PI / 2, 0.946, -Math.PI / 2]}
        scale={[0.019, 0.005, 0.007]}
      >
        {[2, 3, 5, 6, 8, 9, 0].includes(time[3]) ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube029.geometry}
        position={[-0.009, 0.053, 0]}
        rotation={[0, 0, -0.665]}
        scale={[-0.006, -0.005, -0.007]}
      >
        {toggle ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
      <mesh
        geometry={nodes.Cube030.geometry}
        position={[0.069, -0.004, 0]}
        rotation={[0, 0, -0.665]}
        scale={[-0.006, -0.005, -0.007]}
      >
        {toggle ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshStandardMaterial color="#414141" />
        )}
      </mesh>
    </group>
  )
}

useGLTF.preload("/clock.glb")
