import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

function hexToHexadecimalNumber(hexString) {
  // Remove the ‘#’ character if present
  hexString = hexString.replace('#', '');
  // Convert the hexadecimal string to a hexadecimal number
  const hexadecimalNumber = parseInt(hexString, 16);
  // Add the ‘0x’ prefix to the hexadecimal number
  return 0x000000 | hexadecimalNumber;
}


export function Citizen(props) {
  const { nodes, materials } = useGLTF('/citizenBlue.glb')
  const material = new THREE.MeshStandardMaterial({
    color: props.color, 
    transparent: false, opacity: 0.5
});
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlueGameFigure3.geometry}
        material={material}
        position={[0, 1.796, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.182}
      />
    </group>
  )
}

useGLTF.preload('/citizenBlue.glb')