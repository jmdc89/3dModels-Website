import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import Pinacle from "./components/Pinacle/Pinacle";
import { OrbitControls } from "@react-three/drei";
import "./index.css";

function App() {
  // const mesh = useRef();

  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas camera={{ zoom: 5, position: [300, 5, 50], fov: 80 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <spotLight intensity={0.75} position={[0, 1000, 0]} />
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
