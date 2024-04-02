import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CitizenYellow(props) {
  const { nodes, materials } = useGLTF('/citizenYellow.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.YellowGameFigure3.geometry}
        material={materials.WoodYellow}
        position={[0, 1.796, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.182}
      />
    </group>
  )
}

useGLTF.preload('/citizenYellow.glb')