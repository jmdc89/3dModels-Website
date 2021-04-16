import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Pinacle(props) {
  const material = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    transparent: false,
    opacity: 1,
  });

  const group = useRef();
  const { nodes, materials } = useGLTF("/torrecompressv.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLOOR.geometry} material={materials.FLOOR} />
      </group>
      <mesh
        geometry={nodes.Modelotorresimpl.geometry}
        material={material}
        scale={[100, 100, 100]}
      />
    </group>
  );
}

useGLTF.preload("/torrecompressv.glb");
