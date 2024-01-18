import React from "react";
import { useAssets } from "./Scene";

const Keyboard = () => {
    const { nodes, materials } = useAssets();
    return (
        <group
            name='Keyboard'
            position={[117.64, -61.37, -5.37]}
            scale={[0.17, 0.21, 0.18]}
        >
            <mesh
                name='Cube 8'
                geometry={nodes["Cube 8"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-41.19, 5.2, 0.65]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.2, 6.43, 4.69]}
            />
            <mesh
                name='Cube 71'
                geometry={nodes["Cube 71"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-41.5, 8.12, 151.38]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 72'
                geometry={nodes["Cube 72"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-41.33, 8.12, 113.8]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 73'
                geometry={nodes["Cube 73"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-42.37, 8.12, -109.43]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 74'
                geometry={nodes["Cube 74"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-42.19, 8.12, -146.68]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 6'
                geometry={nodes["Cube 6"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[0.04, 8.12, 150.02]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 61'
                geometry={nodes["Cube 61"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[0.21, 8.12, 112.45]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 62'
                geometry={nodes["Cube 62"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[0.39, 8.12, 75.2]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 63'
                geometry={nodes["Cube 63"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-0.74, 8.12, 37.78]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 64'
                geometry={nodes["Cube 64"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-0.56, 8.12, 0.35]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 65'
                geometry={nodes["Cube 65"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-0.39, 8.12, -37.04]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 66'
                geometry={nodes["Cube 66"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-1, 8.12, -73.21]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 67'
                geometry={nodes["Cube 67"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-0.83, 8.12, -110.79]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 68'
                geometry={nodes["Cube 68"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[-0.65, 8.12, -148.04]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 51'
                geometry={nodes["Cube 51"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[44.89, 8.12, 148.87]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 52'
                geometry={nodes["Cube 52"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[45.07, 8.12, 111.29]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 53'
                geometry={nodes["Cube 53"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[45.24, 8.12, 74.05]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 41'
                geometry={nodes["Cube 41"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[44.12, 8.12, 36.63]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 42'
                geometry={nodes["Cube 42"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[44.29, 8.12, -0.95]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 43'
                geometry={nodes["Cube 43"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[44.47, 8.12, -38.2]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 31'
                geometry={nodes["Cube 31"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[43.85, 8.12, -74.36]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 2'
                geometry={nodes["Cube 2"].geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[44.03, 8.12, -111.94]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube3'
                geometry={nodes.Cube3.geometry}
                material={materials["Keyboard Keys"]}
                castShadow
                receiveShadow
                position={[44.2, 8.12, -149.19]}
                rotation={[-1.57, 0.01, -0.01]}
                scale={[5.54, 5.12, 3.63]}
            />
            <mesh
                name='Cube 11'
                geometry={nodes["Cube 11"].geometry}
                material={materials["Cube 11 Material"]}
                castShadow
                receiveShadow
                position={[0, -3.33, 0]}
                scale={[0.74, 0.16, 1.01]}
            />
        </group>
    );
};

export default React.memo(Keyboard);
