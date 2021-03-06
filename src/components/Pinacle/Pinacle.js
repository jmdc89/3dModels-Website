import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Pinacle(props) {
  const material = new THREE.MeshStandardMaterial({
    color: 0xe5a95a,
    transparent: false,
    opacity: 1,
  });

  const materialfloor = new THREE.MeshStandardMaterial({
    color: 0x0a192f,
    transparent: true,
    opacity: 0,
  });

  const group = useRef();
  const { nodes } = useGLTF("/torrecompressv.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLOOR.geometry} material={materialfloor} />
      </group>
      <mesh
        geometry={nodes.Modelotorresimpl.geometry}
        material={material}
        scale={[100, 100, 100]}
        position={[0, -30, 0]}
      />
    </group>
  );
}

useGLTF.preload("/torrecompressv.glb");
