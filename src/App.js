import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Pinacle from "./components/Pinacle/Pinacle";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <h1>hola mundo</h1>
      <div styled={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ zoom: 2000, position: [15, 500, 500] }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Pinacle />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
