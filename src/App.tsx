import { Canvas } from "@react-three/fiber";
import "./App.css";
import ThreeElement from "./ThreeElement";

function App() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{
          // zoom: 250,
          near: 1,
          far: 20,
          fov: 75, // orthographic에서는 필요 x
          position: [3, 3, 0],
        }}
      >
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
