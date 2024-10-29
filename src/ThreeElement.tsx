import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as Three from "three";
import { useControls } from "leva";
import { Box, Sphere, Cone } from "@react-three/drei";

export default function ThreeElement() {
  const { size, scene } = useThree();
  const boxRef = useRef<Three.Mesh>(null);

  // scene 에 대한 변화를 useFrame 내부에서 동작하도록 추가해야한다.
  useFrame((state, delta) => {
    // scene.position.x += 0.01;
    // scene.rotation.x += 0.01;
    // groupRef.current.rotation.x += delta;
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <Sphere position={[-2, 0, 0]}>
        <meshStandardMaterial color="green" />
      </Sphere>
      <mesh geometry={new Three.BoxGeometry(1, 1, 1)}>
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={boxRef} position={[2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
