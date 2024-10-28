import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as Three from "three";
import { useControls } from "leva";

export default function ThreeElement() {
  const { size, scene } = useThree();
  const boxRef = useRef<Three.Mesh>(null);
  const groupRef = useRef<Three.Group>(null);
  // scene 에 대한 변화를 useFrame 내부에서 동작하도록 추가해야한다.

  useFrame((state, delta) => {
    // scene.position.x += 0.01;
    scene.rotation.x += 0.01;
    groupRef.current.rotation.x += delta;
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <group
        ref={groupRef}
        position={[0, 0, 0]}
        rotation={[
          Three.MathUtils.degToRad(0),
          Three.MathUtils.degToRad(45),
          Three.MathUtils.degToRad(0),
        ]}
      >
        <mesh
          ref={boxRef}
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>

        <mesh
          ref={boxRef}
          position={[2, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(45),
            Three.MathUtils.degToRad(45),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color="red" />
          <axesHelper args={[3]} />
        </mesh>

        <mesh
          ref={boxRef}
          position={[0, 2, 0]}
          scale={[1, 1, 1]}
          rotation={[
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </>
  );
}
