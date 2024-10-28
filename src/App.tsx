import { Canvas } from "@react-three/fiber";
import "./App.css";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        camera={{
          near: 1,
          fov: 75,
          far: 100,
          position: [5, 5, 5],
        }}
      >
        <color attach="background" args={["white"]} />
        <OrbitControls />
        <axesHelper args={[6]} />
        <gridHelper args={[10, 10]} />
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
