import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as Three from "three";
import { useControls } from "leva";

export default function ThreeElement() {
  const { size, scene } = useThree();
  const boxRef = useRef<Three.Mesh>(null);
  const boxCopyRef = useRef<Three.Mesh>(null);

  // const boxControl = useControls({
  //   width: { value: 1, min: 0.1, max: 10, step: 0.1 },
  //   height: { value: 1, min: 0.1, max: 10, step: 0.1 },
  //   depth: { value: 1, min: 0.1, max: 10, step: 0.1 },
  //   widthSegments: { value: 1, min: 1, max: 10, step: 1 },
  //   heightSegments: { value: 1, min: 1, max: 10, step: 1 },
  //   depthSegments: { value: 1, min: 1, max: 10, step: 1 },
  // });

  const circleControl = useControls({
    radius: { value: 1, min: 0.1, max: 10, step: 0.1 },
    segments: { value: 32, min: 1, max: 100, step: 1 },
    thetaStart: { value: 0, min: 0, max: 360, step: 0.1 },
    thetaLength: { value: 360, min: 0, max: 360, step: 0.1 },
  });

  // scene 에 대한 변화를 useFrame 내부에서 동작하도록 추가해야한다.
  useFrame((state, delta) => {
    // scene.position.x += 0.01;
    // scene.rotation.x += 0.01;
    // groupRef.current.rotation.x += delta;
  });

  useEffect(() => {
    boxCopyRef.current.geometry = boxRef.current.geometry;
  }, [circleControl]);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />

      <mesh ref={boxRef} position={[0, 0, 0]}>
        {/* <boxGeometry
          args={[
            boxControl.width,
            boxControl.height,
            boxControl.depth,
            boxControl.widthSegments,
            boxControl.heightSegments,
            boxControl.depthSegments,
          ]}
        /> */}

        <circleGeometry
          args={[
            circleControl.radius,
            circleControl.segments,
            Three.MathUtils.degToRad(circleControl.thetaStart),
            Three.MathUtils.degToRad(circleControl.thetaLength),
          ]}
        />
        <meshStandardMaterial wireframe />
      </mesh>

      <mesh ref={boxCopyRef}>
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
