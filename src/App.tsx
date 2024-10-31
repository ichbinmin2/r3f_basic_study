import { Canvas } from "@react-three/fiber";
import "./App.css";
import LightTestElement from "./LightTestElement";
import { OrbitControls } from "@react-three/drei";
import MaterialTestElement from "./MaterialTestElement";

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          // near: 1,
          // fov: 75,
          // far: 100,
          position: [5, 5, 5],
        }}
      >
        <color attach="background" args={["black"]} />
        <OrbitControls />
        {/* <axesHelper args={[6]} />
        <gridHelper args={[10, 10]} /> */}
        {/* <MaterialTestElement /> */}
        <LightTestElement />
      </Canvas>
    </>
  );
}

export default App;
