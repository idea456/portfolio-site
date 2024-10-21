import React from "react";
import { useAssets } from "./Scene";
import { usePreloader } from "../../../hooks";

const Lamp = () => {
    const { nodes, materials } = useAssets();
    const modelRef = usePreloader();

    return (
        <group
            name='Lamp'
            ref={modelRef}
            position={[19.63, 84.44, -135.97]}
            rotation={[0, 0.46, 0]}
            scale={0.97}
        >
            <mesh
                name='Cylinder 3'
                geometry={nodes["Cylinder 3"].geometry}
                material={materials["Cylinder 3 Material"]}
                castShadow
                receiveShadow
                position={[-5.16, 16.36, -0.65]}
                rotation={[Math.PI / 2, 0.56, -Math.PI / 2]}
                scale={[0.2, 0.17, 0.2]}
            />
            <mesh
                name='Cylinder 2'
                geometry={nodes["Cylinder 2"].geometry}
                material={materials["Cylinder 2 Material"]}
                castShadow
                receiveShadow
                position={[13.79, -6.16, -0.57]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.2, 0.24, 0.2]}
            />
            <mesh
                name='Cylinder'
                geometry={nodes.Cylinder.geometry}
                material={materials["Cylinder Material"]}
                castShadow
                receiveShadow
                position={[12.18, -36.81, 1.06]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.13, 1]}
            />
        </group>
    );
};

export default React.memo(Lamp);
