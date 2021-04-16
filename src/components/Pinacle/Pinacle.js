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
  const { nodes } = useGLTF("/pinacle.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Modelotorresimpl.geometry} material={material} />
    </group>
  );
}

useGLTF.preload("/torrecompress.glb");
