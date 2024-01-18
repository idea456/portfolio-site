import React from "react";
import { useAssets } from "./Scene";

const Walls = () => {
  const { nodes, materials } = useAssets();

  return (
    <group
      name="Walls"
      position={[6.69, 26.05, 23.99]}
      rotation={[-Math.PI, -0.03, -Math.PI]}
      scale={1.73}
    >
      <group
        name="Floor"
        position={[-0.5, -108.13, 2.68]}
        rotation={[0, 0, 0]}
        scale={1}
      >
        <mesh
          name="Concrete"
          geometry={nodes.Concrete.geometry}
          material={materials["Concrete Material"]}
          castShadow
          receiveShadow
          position={[0, -12.17, 0]}
          rotation={[-1.58, 0, 1.56]}
          scale={[1, 1.15, 1]}
        />
      </group>
      <mesh
        name="Cube 79"
        geometry={nodes["Cube 79"].geometry}
        material={materials["Cube 79 Material"]}
        castShadow
        receiveShadow
        position={[-102.18, 48.97, -88.08]}
        rotation={[1.54, 1.05, -1.54]}
        scale={1}
      />
      <mesh
        name="Cube 78"
        geometry={nodes["Cube 78"].geometry}
        material={materials["Cube 78 Material"]}
        castShadow
        receiveShadow
        position={[-105.32, 49.01, 86.42]}
        rotation={[1.54, 1.05, -1.54]}
        scale={1}
      />
      <mesh
        name="Cube 77"
        geometry={nodes["Cube 77"].geometry}
        material={materials["Cube 77 Material"]}
        castShadow
        receiveShadow
        position={[-139.31, -71.16, -9.04]}
        rotation={[0, 1.55, 0]}
      />
      <mesh
        name="Shape"
        geometry={nodes.Shape.geometry}
        material={materials.orange}
        castShadow
        receiveShadow
        position={[135.82, -105.6, -130.96]}
        rotation={[0, -0.02, 0]}
        scale={1}
      />
      <mesh
        name="Wall"
        geometry={nodes.Wall.geometry}
        material={materials.orange}
        castShadow
        receiveShadow
        position={[135.5, -105.6, -114.31]}
        rotation={[0, -0.02, 0]}
        scale={1}
      />
      <mesh
        name="Cube 5"
        geometry={nodes["Cube 5"].geometry}
        material={materials["Cube 5 Material"]}
        castShadow
        receiveShadow
        position={[-68.8, 101.1, 13.19]}
        rotation={[1.54, 1.05, 0.03]}
        scale={1}
      />
      <mesh
        name="Cube 4"
        geometry={nodes["Cube 4"].geometry}
        material={materials["Cube 4 Material"]}
        castShadow
        receiveShadow
        position={[-97.09, 49.1, -80.4]}
        rotation={[1.54, 1.05, -1.54]}
      />
      <mesh
        name="Cube 3"
        geometry={nodes["Cube 3"].geometry}
        material={materials["Cube 3 Material"]}
        castShadow
        receiveShadow
        position={[-100.45, 48.2, 87.31]}
        rotation={[1.54, 1.05, -1.54]}
      />
      <mesh
        name="Cube 7"
        geometry={nodes["Cube 7"].geometry}
        material={materials["Cube 7 Material"]}
        castShadow
        receiveShadow
        position={[-95.78, -61.45, -118.4]}
        rotation={[0, -0.02, 0]}
        scale={[1, 1, 0.64]}
      />
      <mesh
        name="Cube1"
        geometry={nodes.Cube1.geometry}
        material={materials["Cube1 Material"]}
        castShadow
        receiveShadow
        position={[-133.77, -61.45, -0.44]}
        rotation={[0, 1.55, 0]}
      />
    </group>
  );
};

export default React.memo(Walls);
