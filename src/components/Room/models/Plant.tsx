import React from "react";
import { useAssets } from "./Scene";
import { usePreloader } from "../../../hooks";

const Plant = () => {
    const { nodes, materials } = useAssets();
    const modelRef = usePreloader();

    return (
        <group
            name='Plant'
            ref={modelRef}
            position={[164.99, -93.1, -149.69]}
            rotation={[0, -0.73, 0]}
            scale={1.2}
        >
            <mesh
                name='Cylinder 31'
                geometry={nodes["Cylinder 31"].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -36.62, -1.27]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.89}
            />
            <mesh
                name='Cylinder 6'
                geometry={nodes["Cylinder 6"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-0.43, 1.68, -12.29]}
                rotation={[-0.28, 1.06, 3.04]}
                scale={0.42}
            />
            <mesh
                name='Cylinder 8'
                geometry={nodes["Cylinder 8"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-3.46, -8.54, 12.03]}
                rotation={[-2.62, 1.24, 0]}
                scale={0.42}
            />
            <mesh
                name='Cylinder 9'
                geometry={nodes["Cylinder 9"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[4.53, -8.73, -14.12]}
                rotation={[-0.33, 0.34, 2.99]}
                scale={0.42}
            />
            <mesh
                name='Cylinder 7'
                geometry={nodes["Cylinder 7"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-4.63, 3.16, 6.13]}
                rotation={[-2.98, Math.PI / 2, 0]}
                scale={0.42}
            />
            <mesh
                name='Cylinder 5'
                geometry={nodes["Cylinder 5"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-4.63, 8.43, -4.24]}
                rotation={[3.05, Math.PI / 2, 0]}
                scale={0.42}
            />
            <mesh
                name='Cylinder 22'
                geometry={nodes["Cylinder 22"].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -26.47, -1.27]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.83}
            />
        </group>
    );
};

export default React.memo(Plant);
