import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CitizenRed(props) {
  console.log(props.color);
  const { nodes, materials } = useGLTF('/citizenRed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RedGameFigure3.geometry}
        material={materials.WoodRed}
        position={[0, 1.796, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.182}
      />
    </group>
  )
}

useGLTF.preload('/citizenRed.glb')