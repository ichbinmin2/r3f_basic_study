import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as Three from "three";
import { useControls } from "leva";

export default function ThreeElement() {
  const { size, scene } = useThree();
  const boxRef = useRef<Three.Mesh>(null);

  // scene 에 대한 변화를 useFrame 내부에서 동작하도록 추가해야한다.
  useFrame((state, delta) => {
    // scene.position.x += 0.01;
  });
  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <group position={[0, 0, 0]}>
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
      </group>
    </>
  );
}
