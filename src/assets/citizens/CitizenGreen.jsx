import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CitizenGreen(props) {
  const { nodes, materials } = useGLTF('/citizenGreen.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GreenGameFigure3.geometry}
        material={materials.WoodGreen}
        position={[0, 1.796, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.182}
      />
    </group>
  )
}

useGLTF.preload('/citizenGreen.glb')