import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as Three from "three";
import { useControls } from "leva";

export default function ThreeElement() {
  const { size } = useThree();
  const boxRef = useRef<Three.Mesh>(null);

  const box = useControls({
    rotation: { value: 0, min: -360, max: 360, stpe: 1 },
  });

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
          Three.MathUtils.degToRad(box.rotation), // y
          0, // z
        ]}
      >
        {/* Geometry와 Material는 무조건 mesh 안에 넣어줘야 동작한다. */}
        {/* <sphereGeometry /> */}
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
