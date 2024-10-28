import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as Three from "three";

export default function ThreeElement() {
  const { size } = useThree();

  const boxRef = useRef<Three.Mesh>(null);

  console.log(size);

  // scene 에 대한 변화를 useFrame 내부에서 동작하도록 추가해야한다.
  useFrame((state, delta) => {
    // boxRef.current.rotation.x += delta;
    // boxRef.current.position.y -= 0.01;
    // boxRef.current.scale.z += 0.01;
  });
  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        rotation={[
          Three.MathUtils.degToRad(45), // x
          Three.MathUtils.degToRad(45), // y
          0, // z
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
