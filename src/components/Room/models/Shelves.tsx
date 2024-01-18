import React from "react";
import { useAssets } from "./Scene";

const Shelves = () => {
    const { nodes, materials } = useAssets();

    return (
        <group name='Shelves' position={[153.25, -69.58, 172.98]}>
            <mesh
                name='Rectangle 4'
                geometry={nodes["Rectangle 4"].geometry}
                material={materials.Oak}
                castShadow
                receiveShadow
                position={[-0.26, -76.09, 1.62]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.98, 1.12, 1]}
            />
            <mesh
                name='Rectangle 3'
                geometry={nodes["Rectangle 3"].geometry}
                material={materials.Oak}
                castShadow
                receiveShadow
                position={[-0.26, -28.67, 1.62]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.98, 1.12, 1]}
            />
            <mesh
                name='Rectangle 21'
                geometry={nodes["Rectangle 21"].geometry}
                material={materials.Oak}
                castShadow
                receiveShadow
                position={[-0.26, 27.03, 1.62]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.98, 1.12, 1]}
            />
            <mesh
                name='Rectangle'
                geometry={nodes.Rectangle.geometry}
                material={materials.Oak}
                castShadow
                receiveShadow
                position={[-0.26, 76.66, 1.62]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.98, 1.12, 1]}
            />
            <mesh
                name='Cube 121'
                geometry={nodes["Cube 121"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, -81.06, 44.05]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 112'
                geometry={nodes["Cube 112"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, -30.8, 44.05]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 101'
                geometry={nodes["Cube 101"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, 23.41, 44.05]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 91'
                geometry={nodes["Cube 91"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, 73.27, 44.05]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 122'
                geometry={nodes["Cube 122"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, -81.06, -41.12]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 113'
                geometry={nodes["Cube 113"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, -30.8, -41.12]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 102'
                geometry={nodes["Cube 102"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, 23.41, -41.12]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 612'
                geometry={nodes["Cube 612"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[1.4, 73.27, -41.12]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.28, 0.51, 0.33]}
            />
            <mesh
                name='Cube 82'
                geometry={nodes["Cube 82"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[30.03, 0, 40.69]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.52, 0.7, 1.19]}
            />
            <mesh
                name='Cube 712'
                geometry={nodes["Cube 712"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[30.03, 0, -41.73]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.52, 0.7, 1.19]}
            />
            <mesh
                name='Cube 83'
                geometry={nodes["Cube 83"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[-30.03, 0, 40.69]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.52, 0.7, 1.19]}
            />
            <mesh
                name='Cube 57'
                geometry={nodes["Cube 57"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[-30.03, 0, -41.73]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.52, 0.7, 1.19]}
            />
        </group>
    );
};

export default React.memo(Shelves);
