import { Canvas } from "@react-three/fiber";
import "./App.css";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function App() {
  const color = useControls({
    value: "white",
  });

  const grid = useControls({
    segment: { value: 10, min: 2, max: 100, stpe: 1 },
  });

  return (
    <>
      <Canvas
        // orthographic
        camera={{
          // zoom: 250,
          near: 1,
          far: 100, // 얼마나 멀리 있는 것까지 카메라에서 렌더링을 할것인지를 결정하는 옵션값
          fov: 75, // orthographic에서는 필요 x
          position: [3, 3, 0],
        }}
      >
        {/* Math.PI = 100
        Math.PI * 2 = 360
        Math.PI / 4 = 45  */}

        <OrbitControls
        // minAzimuthAngle={-Math.PI / 4} // -45
        // maxAzimuthAngle={Math.PI / 4} // 45
        // minPolarAngle={Math.PI / 6}
        // maxPolarAngle={Math.PI - Math.PI / 6}
        />
        {/* 기본적으로 args 옵션 값은 미터단위로 계산된다. */}
        <axesHelper args={[6]} />
        <gridHelper args={[10, grid.segment]} />
        <ThreeElement />

        {/* leva useControl */}

        <color attach="background" args={[color.value]} />
      </Canvas>
    </>
  );
}

export default App;
