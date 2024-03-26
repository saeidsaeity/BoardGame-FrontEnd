import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileE = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/tileE.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.Grass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials.City_floor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_2.geometry}
            material={materials.Grass_edge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_3.geometry}
            material={materials.City_edge}
          />
          <group position={[-0.642, 1.002, 0.724]} scale={[0.3, 3, 0.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube199.geometry}
              material={materials['Wood.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube199_1.geometry}
              material={materials.Metal_Light}
            />
          </group>
          <group position={[-0.759, 1.044, 0.628]} scale={[0.3, 3, 0.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube201.geometry}
              material={materials.Wood_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube201_1.geometry}
              material={materials['Wood.004']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials['Material.002']}
            position={[0, -2, 0]}
            scale={[0.95, 1, 0.95]}
          />
          <group position={[-0.729, 0.924, 0.721]} rotation={[0, 0.855, 0]} scale={[0.1, 1, 0.1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015.geometry}
              material={materials.Stone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_1.geometry}
              material={materials.Wood}
            />
          </group>
          <group
            position={[0.309, 0.995, -0.747]}
            rotation={[0, -0.054, 0]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_1.geometry}
              material={materials['Main.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_2.geometry}
              material={materials['Walls.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_3.geometry}
              material={materials['Stone.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_4.geometry}
              material={materials['Wood.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_5.geometry}
              material={materials['Wood_Light.004']}
            />
          </group>
          <group
            position={[-0.275, 0.995, -0.763]}
            rotation={[0, -0.054, 0]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_1.geometry}
              material={materials['Main.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_2.geometry}
              material={materials['Walls.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_3.geometry}
              material={materials['Stone.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_4.geometry}
              material={materials['Wood.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_5.geometry}
              material={materials['Wood_Light.004']}
            />
          </group>
          <group
            position={[0.351, 0.956, -0.641]}
            rotation={[-Math.PI, 1.554, -Math.PI]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials['Main.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_1.geometry}
              material={materials['Wood.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_2.geometry}
              material={materials['Wood_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_3.geometry}
              material={materials['Walls.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_4.geometry}
              material={materials['Stone.006']}
            />
          </group>
          <group
            position={[-0.336, 0.956, -0.651]}
            rotation={[-Math.PI, 1.554, -Math.PI]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009.geometry}
              material={materials['Main.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_1.geometry}
              material={materials['Wood.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_2.geometry}
              material={materials['Wood_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_3.geometry}
              material={materials['Walls.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_4.geometry}
              material={materials['Stone.006']}
            />
          </group>
          <group
            position={[-0.456, 0.956, -0.844]}
            rotation={[-Math.PI, 1.554, -Math.PI]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010.geometry}
              material={materials['Main.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_1.geometry}
              material={materials['Wood.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_2.geometry}
              material={materials['Wood_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_3.geometry}
              material={materials['Walls.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_4.geometry}
              material={materials['Stone.006']}
            />
          </group>
          <group
            position={[0.524, 0.956, -0.83]}
            rotation={[-Math.PI, 1.554, -Math.PI]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011.geometry}
              material={materials['Main.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_1.geometry}
              material={materials['Wood.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_2.geometry}
              material={materials['Wood_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_3.geometry}
              material={materials['Walls.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_4.geometry}
              material={materials['Stone.006']}
            />
          </group>
          <group
            position={[-0.591, 0.915, -0.573]}
            rotation={[-Math.PI, 0.83, -Math.PI]}
            scale={[0.4, 3.3, 0.45]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials['Stone.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials['Stone_Light.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_2.geometry}
              material={materials['Wood.008']}
            />
          </group>
          <group position={[0.583, 0.915, -0.562]} rotation={[0, 0.802, 0]} scale={[0.42, 3.3, 0.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
              material={materials['Stone.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_1.geometry}
              material={materials['Stone_Light.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_2.geometry}
              material={materials['Wood.008']}
            />
          </group>
          <group
            position={[-0.019, 0.982, -0.353]}
            rotation={[Math.PI, -0.001, Math.PI]}
            scale={[0.42, 4.2, 0.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials.Metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_1.geometry}
              material={materials['Stone_Light.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_2.geometry}
              material={materials['Stone.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_3.geometry}
              material={materials['Wood.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_4.geometry}
              material={materials['Main.007']}
            />
          </group>
          <group
            position={[-0.79, 0.388, -0.8]}
            rotation={[Math.PI, -0.742, Math.PI]}
            scale={[0.25, 2.5, 0.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012.geometry}
              material={materials['Stone_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_1.geometry}
              material={materials['Stone.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_2.geometry}
              material={materials['Wood.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_3.geometry}
              material={materials['Main.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_4.geometry}
              material={materials['Wood_Light.008']}
            />
          </group>
          <group
            position={[0.789, 0.388, -0.778]}
            rotation={[-Math.PI, 0.802, -Math.PI]}
            scale={[0.25, 2.5, 0.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013.geometry}
              material={materials['Stone_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_1.geometry}
              material={materials['Stone.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_2.geometry}
              material={materials['Wood.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_3.geometry}
              material={materials['Main.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_4.geometry}
              material={materials['Wood_Light.008']}
            />
          </group>
        </group>
      </group>
    )
  })
  
  useGLTF.preload('/tileE.glb')

export default TileE