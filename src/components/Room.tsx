import useSpline from "@splinetool/r3f-spline";
import { PerspectiveCamera } from "@react-three/drei";

export default function Scene({ ...props }) {
    const { nodes, materials } = useSpline(
        "https://prod.spline.design/qYll213KzO3ssysh/scene.splinecode",
    );
    return (
        <>
            <color attach='background' args={["#f4eee0"]} />
            <group {...props} dispose={null}>
                <scene name='Scene 1'>
                    <PerspectiveCamera
                        name='Camera 2'
                        aspect={window.innerWidth / window.innerHeight}
                        makeDefault
                        far={10000}
                        near={1}
                        fov={60}
                        up={[0, 1, 0]}
                        position={[-951.03, 729.65, -648.96]}
                        rotation={[-2.43, -0.6, -2.69]}
                        scale={1}
                    />
                    <group
                        name='Handle'
                        position={[-110, 184.01, 273.28]}
                        scale={0.15}
                    >
                        <mesh
                            name='Cylinder'
                            geometry={nodes.Cylinder.geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[43.38, 0, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name='Cube 12'
                            geometry={nodes["Cube 12"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[-33.13, 2.05, 4.96]}
                            rotation={[-Math.PI, 0, 0]}
                            scale={[0.93, 1, 0.37]}
                        />
                    </group>
                    <mesh
                        name='Cube 11'
                        geometry={nodes["Cube 11"].geometry}
                        material={materials["Cube 11 Material"]}
                        castShadow
                        receiveShadow
                        position={[-51.66, 194.59, 288.36]}
                        rotation={[Math.PI, 0, Math.PI]}
                        scale={[1, 0.76, 1]}
                    />
                    <group name='Desktop' position={[128.42, 152.43, 125.19]}>
                        <mesh
                            name='Plane 3'
                            geometry={nodes["Plane 3"].geometry}
                            material={materials["Plane 3 Material"]}
                            castShadow
                            receiveShadow
                            position={[-28.57, -0.16, -1.28]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1, 0.96, 1]}
                        />
                        <mesh
                            name='Cube'
                            geometry={nodes.Cube.geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.62, 0.82, 1.21]}
                        />
                    </group>
                    <directionalLight
                        name='Directional Light'
                        castShadow
                        intensity={3}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-near={-10000}
                        shadow-camera-far={100000}
                        shadow-camera-left={-462.808}
                        shadow-camera-right={462.808}
                        shadow-camera-top={462.808}
                        shadow-camera-bottom={-462.808}
                        color='#eaeaea'
                        position={[-268.36, 545.43, 103.57]}
                    />
                    <group
                        name='Window'
                        position={[-54.75, 180.89, 268.04]}
                        scale={[1.05, 1.16, 1]}
                    >
                        <mesh
                            name='Plane'
                            geometry={nodes.Plane.geometry}
                            material={materials["Plane Material"]}
                            castShadow
                            receiveShadow
                            position={[2.38, 0.07, 6.08]}
                            rotation={[Math.PI, 0, 0]}
                            scale={[1.09, 1.05, 1]}
                        />
                        <mesh
                            name='Cube 111'
                            geometry={nodes["Cube 111"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[-0.07, 0, 0]}
                            rotation={[Math.PI, 0, Math.PI]}
                            scale={[-0.92, 1, 0.06]}
                        />
                    </group>
                    <group
                        name='Keyboard'
                        position={[64.54, 127.03, 38.38]}
                        scale={0.21}
                    >
                        <mesh
                            name='Cube 33'
                            geometry={nodes["Cube 33"].geometry}
                            material={materials["Cube 33 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.94, 10.97, 10.53]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1, 0.63]}
                        />
                        <mesh
                            name='Cube 27'
                            geometry={nodes["Cube 27"].geometry}
                            material={materials["Cube 27 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.67, 17.19, 115.74]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 30'
                            geometry={nodes["Cube 30"].geometry}
                            material={materials["Cube 30 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.53, 17.19, 2.09]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 29'
                            geometry={nodes["Cube 29"].geometry}
                            material={materials["Cube 29 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.87, 17.19, -4.05]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 26'
                            geometry={nodes["Cube 26"].geometry}
                            material={materials["Cube 26 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.65, 17.19, -12.2]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 23'
                            geometry={nodes["Cube 23"].geometry}
                            material={materials["Cube 23 Material"]}
                            castShadow
                            receiveShadow
                            position={[48.99, 17.19, 155.21]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 31'
                            geometry={nodes["Cube 31"].geometry}
                            material={materials["Cube 31 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.24, 16.59, 140.62]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 2.28, 1]}
                        />
                        <mesh
                            name='Cube 28'
                            geometry={nodes["Cube 28"].geometry}
                            material={materials["Cube 28 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.92, 16.59, 147.39]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.66, 1]}
                        />
                        <mesh
                            name='Cube 301'
                            geometry={nodes["Cube 301"].geometry}
                            material={materials["Cube 301 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.36, 17.19, 106.21]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 291'
                            geometry={nodes["Cube 291"].geometry}
                            material={materials["Cube 291 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.7, 17.19, 100.07]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 271'
                            geometry={nodes["Cube 271"].geometry}
                            material={materials["Cube 271 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.82, 17.19, 91.91]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 302'
                            geometry={nodes["Cube 302"].geometry}
                            material={materials["Cube 302 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.37, 17.19, -23.04]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 292'
                            geometry={nodes["Cube 292"].geometry}
                            material={materials["Cube 292 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.72, 17.19, -29.18]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 261'
                            geometry={nodes["Cube 261"].geometry}
                            material={materials["Cube 261 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.81, 17.19, -37.33]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 22'
                            geometry={nodes["Cube 22"].geometry}
                            material={materials["Cube 22 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.15, 17.19, 131.38]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 25'
                            geometry={nodes["Cube 25"].geometry}
                            material={materials["Cube 25 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.23, 17.19, 0.97]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 24'
                            geometry={nodes["Cube 24"].geometry}
                            material={materials["Cube 24 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.23, 17.19, -78.13]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 20'
                            geometry={nodes["Cube 20"].geometry}
                            material={materials["Cube 20 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.23, 17.19, -78.13]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 19'
                            geometry={nodes["Cube 19"].geometry}
                            material={materials["Cube 19 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.37, 17.19, -77.72]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 303'
                            geometry={nodes["Cube 303"].geometry}
                            material={materials["Cube 303 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.68, 17.19, 80.13]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 293'
                            geometry={nodes["Cube 293"].geometry}
                            material={materials["Cube 293 Material"]}
                            castShadow
                            receiveShadow
                            position={[-1.02, 17.19, 73.99]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 272'
                            geometry={nodes["Cube 272"].geometry}
                            material={materials["Cube 272 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.5, 17.19, 65.84]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 304'
                            geometry={nodes["Cube 304"].geometry}
                            material={materials["Cube 304 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.7, 17.19, -47.81]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 294'
                            geometry={nodes["Cube 294"].geometry}
                            material={materials["Cube 294 Material"]}
                            castShadow
                            receiveShadow
                            position={[-1.04, 17.19, -53.95]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 262'
                            geometry={nodes["Cube 262"].geometry}
                            material={materials["Cube 262 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.49, 17.19, -62.11]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 221'
                            geometry={nodes["Cube 221"].geometry}
                            material={materials["Cube 221 Material"]}
                            castShadow
                            receiveShadow
                            position={[48.83, 17.19, 105.31]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 251'
                            geometry={nodes["Cube 251"].geometry}
                            material={materials["Cube 251 Material"]}
                            castShadow
                            receiveShadow
                            position={[48.91, 17.19, -25.11]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 241'
                            geometry={nodes["Cube 241"].geometry}
                            material={materials["Cube 241 Material"]}
                            castShadow
                            receiveShadow
                            position={[48.91, 17.19, -104.21]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 201'
                            geometry={nodes["Cube 201"].geometry}
                            material={materials["Cube 201 Material"]}
                            castShadow
                            receiveShadow
                            position={[48.91, 17.19, -104.21]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 34'
                            geometry={nodes["Cube 34"].geometry}
                            material={materials["Cube 34 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.7, 17.19, 152.14]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 18'
                            geometry={nodes["Cube 18"].geometry}
                            material={materials["Cube 18 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.7, 17.19, -103.79]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 305'
                            geometry={nodes["Cube 305"].geometry}
                            material={materials["Cube 305 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.51, 17.19, 54.37]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 295'
                            geometry={nodes["Cube 295"].geometry}
                            material={materials["Cube 295 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.86, 17.19, 48.23]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 273'
                            geometry={nodes["Cube 273"].geometry}
                            material={materials["Cube 273 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.67, 17.19, 40.08]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 306'
                            geometry={nodes["Cube 306"].geometry}
                            material={materials["Cube 306 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.53, 17.19, -73.58]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 296'
                            geometry={nodes["Cube 296"].geometry}
                            material={materials["Cube 296 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.87, 17.19, -79.71]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 263'
                            geometry={nodes["Cube 263"].geometry}
                            material={materials["Cube 263 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.65, 17.19, -87.87]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 222'
                            geometry={nodes["Cube 222"].geometry}
                            material={materials["Cube 222 Material"]}
                            castShadow
                            receiveShadow
                            position={[48.99, 17.19, 79.54]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 242'
                            geometry={nodes["Cube 242"].geometry}
                            material={materials["Cube 242 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.08, 17.19, -129.97]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 202'
                            geometry={nodes["Cube 202"].geometry}
                            material={materials["Cube 202 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.08, 17.19, -129.97]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 341'
                            geometry={nodes["Cube 341"].geometry}
                            material={materials["Cube 341 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.53, 17.19, 126.38]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 17'
                            geometry={nodes["Cube 17"].geometry}
                            material={materials["Cube 17 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.53, 17.19, -129.55]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 307'
                            geometry={nodes["Cube 307"].geometry}
                            material={materials["Cube 307 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.38, 17.19, 28.54]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 297'
                            geometry={nodes["Cube 297"].geometry}
                            material={materials["Cube 297 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.73, 17.19, 22.4]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 274'
                            geometry={nodes["Cube 274"].geometry}
                            material={materials["Cube 274 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.8, 17.19, 14.24]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 308'
                            geometry={nodes["Cube 308"].geometry}
                            material={materials["Cube 308 Material"]}
                            castShadow
                            receiveShadow
                            position={[-25.4, 17.19, -99.41]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 298'
                            geometry={nodes["Cube 298"].geometry}
                            material={materials["Cube 298 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.74, 17.19, -105.55]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 264'
                            geometry={nodes["Cube 264"].geometry}
                            material={materials["Cube 264 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.78, 17.19, -113.7]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 223'
                            geometry={nodes["Cube 223"].geometry}
                            material={materials["Cube 223 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.12, 17.19, 53.71]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 252'
                            geometry={nodes["Cube 252"].geometry}
                            material={materials["Cube 252 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.04, 17.19, 27.73]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 21'
                            geometry={nodes["Cube 21"].geometry}
                            material={materials["Cube 21 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.04, 17.19, -51.37]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 203'
                            geometry={nodes["Cube 203"].geometry}
                            material={materials["Cube 203 Material"]}
                            castShadow
                            receiveShadow
                            position={[49.2, 17.19, -155.8]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 342'
                            geometry={nodes["Cube 342"].geometry}
                            material={materials["Cube 342 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.4, 17.19, 100.55]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 16'
                            geometry={nodes["Cube 16"].geometry}
                            material={materials["Cube 16 Material"]}
                            castShadow
                            receiveShadow
                            position={[-52.4, 17.19, -155.39]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.08, 1]}
                        />
                        <mesh
                            name='Cube 15'
                            geometry={nodes["Cube 15"].geometry}
                            material={materials["Cube 15 Material"]}
                            castShadow
                            receiveShadow
                            position={[-26.86, 17.19, -140.42]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 2.47, 1]}
                        />
                        <mesh
                            name='Cube 32'
                            geometry={nodes["Cube 32"].geometry}
                            material={materials["Cube 32 Material"]}
                            castShadow
                            receiveShadow
                            position={[-23.4, 13.19, 141.93]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.95, 1]}
                        />
                        <mesh
                            name='Cube 14'
                            geometry={nodes["Cube 14"].geometry}
                            material={materials["Cube 14 Material"]}
                            castShadow
                            receiveShadow
                            position={[-1.78, 17.19, -143.82]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 2.22, 1]}
                        />
                        <mesh
                            name='Cube 13'
                            geometry={nodes["Cube 13"].geometry}
                            material={materials["Cube 13 Material"]}
                            castShadow
                            receiveShadow
                            position={[23.64, 17.19, -148.07]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1.88, 1]}
                        />
                        <mesh
                            name='Cube 112'
                            geometry={nodes["Cube 112"].geometry}
                            material={materials["Cube 112 Material"]}
                            castShadow
                            receiveShadow
                            position={[0, -3.33, 0]}
                            scale={[0.74, 0.16, 1.01]}
                        />
                    </group>
                    <group
                        name='Speaker'
                        position={[97.89, 161.87, 198.02]}
                        scale={[0.15, 0.13, 0.15]}
                    >
                        <mesh
                            name='Plane 2'
                            geometry={nodes["Plane 2"].geometry}
                            material={materials["Plane 2 Material"]}
                            castShadow
                            receiveShadow
                            position={[-73.13, -3.79, 2.77]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            name='Cube 121'
                            geometry={nodes["Cube 121"].geometry}
                            material={materials["Cube 121 Material"]}
                            castShadow
                            receiveShadow
                            position={[-67.21, 3.84, 5.49]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1, 1, 1.24]}
                        />
                        <mesh
                            name='Cube 113'
                            geometry={nodes["Cube 113"].geometry}
                            material={materials["Cube 113 Material"]}
                            castShadow
                            receiveShadow
                        />
                    </group>
                    <group name='Group' position={[99.21, 103.3, 194.72]}>
                        <mesh
                            name='Cube 6'
                            geometry={nodes["Cube 6"].geometry}
                            material={materials["Cube 6 Material"]}
                            castShadow
                            receiveShadow
                            position={[0.44, 4.64, 0.64]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[0.39, 0.72, 3.62]}
                        />
                        <mesh
                            name='Cube 5'
                            geometry={nodes["Cube 5"].geometry}
                            material={materials["Cube 5 Material"]}
                            castShadow
                            receiveShadow
                            position={[0, -1.67, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[1, 0.72, 3.62]}
                        />
                    </group>
                    <mesh
                        name='Cube 10'
                        geometry={nodes["Cube 10"].geometry}
                        material={materials["Cube 10 Material"]}
                        castShadow
                        receiveShadow
                        position={[95.41, 169.51, 227.99]}
                        rotation={[1.91, 0, Math.PI / 2]}
                        scale={[0.76, 0.72, 3.81]}
                    />
                    <mesh
                        name='Cube 9'
                        geometry={nodes["Cube 9"].geometry}
                        material={materials["Cube 9 Material"]}
                        castShadow
                        receiveShadow
                        position={[97.14, 166.71, 235.85]}
                        rotation={[1.91, 0, Math.PI / 2]}
                        scale={[0.76, 0.72, 3.81]}
                    />
                    <mesh
                        name='Cube 8'
                        geometry={nodes["Cube 8"].geometry}
                        material={materials["Cube 8 Material"]}
                        castShadow
                        receiveShadow
                        position={[99.27, 169.04, 245.6]}
                        rotation={[1.91, 0, Math.PI / 2]}
                        scale={[1, 0.72, 3.81]}
                    />
                    <group
                        name='Succulent1 2'
                        position={[100.82, 213.17, 236.5]}
                        scale={[-0.23, 0.23, 0.23]}
                    >
                        <mesh
                            name='Cylinder 3'
                            geometry={nodes["Cylinder 3"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-2.31, 30.3, -45.69]}
                            rotation={[Math.PI, 0.74, -Math.PI]}
                            scale={[0.43, 2.47, 0.43]}
                        />
                        <mesh
                            name='Cylinder 2'
                            geometry={nodes["Cylinder 2"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-19.03, 30.19, -28.88]}
                            rotation={[Math.PI, 0.74, -Math.PI]}
                            scale={[0.43, 0.99, 0.43]}
                        />
                        <mesh
                            name='Cylinder1'
                            geometry={nodes.Cylinder1.geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[5.85, 42.85, -24.9]}
                            rotation={[Math.PI, 0, -Math.PI]}
                            scale={[0.43, 0.99, 0.43]}
                        />
                        <mesh
                            name='Cylinder2'
                            geometry={nodes.Cylinder2.geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[-2.93, -42.2, -32.94]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[0.39, 0.05, 0.39]}
                        />
                        <mesh
                            name='Sphere'
                            geometry={nodes.Sphere.geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[-2.48, -6.43, -32.26]}
                            rotation={[0, 0, Math.PI]}
                        />
                    </group>
                    <group
                        name='Succulent1 3'
                        position={[102.51, 117.3, 197.42]}
                        scale={0.16}
                    >
                        <mesh
                            name='Cube 7'
                            geometry={nodes["Cube 7"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[116.2, -31.87, 17.4]}
                            rotation={[1.41, 1.5, -1.49]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 61'
                            geometry={nodes["Cube 61"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-121.73, -20.14, -14.83]}
                            rotation={[-Math.PI / 2, -1.56, -1.65]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 71'
                            geometry={nodes["Cube 71"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[20.62, -15.19, -117.12]}
                            rotation={[3.14, 0.01, 2.9]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 51'
                            geometry={nodes["Cube 51"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-23.45, -11.8, 118.51]}
                            rotation={[0, 0, -0.33]}
                        />
                        <mesh
                            name='Sphere1'
                            geometry={nodes.Sphere1.geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[-1.67, -17.3, -2.46]}
                            rotation={[0, 0, Math.PI]}
                        />
                    </group>
                    <group
                        name='Succulent1'
                        position={[115.8, 150.45, 78.34]}
                        scale={0.16}
                    >
                        <mesh
                            name='Cube 72'
                            geometry={nodes["Cube 72"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[116.2, -31.87, 17.4]}
                            rotation={[1.41, 1.5, -1.49]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 62'
                            geometry={nodes["Cube 62"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-121.73, -20.14, -14.83]}
                            rotation={[-Math.PI / 2, -1.56, -1.65]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 73'
                            geometry={nodes["Cube 73"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[20.62, -15.19, -117.12]}
                            rotation={[3.14, 0.01, 2.9]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 52'
                            geometry={nodes["Cube 52"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-23.45, -11.8, 118.51]}
                            rotation={[0, 0, -0.33]}
                        />
                        <mesh
                            name='Sphere2'
                            geometry={nodes.Sphere2.geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[-1.67, -17.3, -2.46]}
                            rotation={[0, 0, Math.PI]}
                        />
                    </group>
                    <group
                        name='Tall plant'
                        position={[104.24, 92.89, -126.36]}
                        rotation={[0, 0, 0]}
                        scale={[0.52, 0.55, 0.52]}
                    >
                        <mesh
                            name='Ellipse 2'
                            geometry={nodes["Ellipse 2"].geometry}
                            material={materials["Ellipse 2 Material"]}
                            castShadow
                            receiveShadow
                            position={[-2.66, -19.42, 0.87]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name='Cylinder3'
                            geometry={nodes.Cylinder3.geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[-2.92, -57.49, 0.2]}
                            scale={[1, 0.76, 1]}
                        />
                        <mesh
                            name='Cube 74'
                            geometry={nodes["Cube 74"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-2.13, 24.62, -22.49]}
                            rotation={[-2.84, 1.51, 2.78]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 91'
                            geometry={nodes["Cube 91"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[12.13, -1.32, -8.91]}
                            rotation={[0.15, 0.69, -0.3]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 81'
                            geometry={nodes["Cube 81"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-11.41, 2.23, 13.59]}
                            rotation={[-2.89, 0.74, 3.14]}
                        />
                        <mesh
                            name='Cube 63'
                            geometry={nodes["Cube 63"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[6.46, 15.25, 23.41]}
                            rotation={[-1.6, -1.37, -1.65]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 75'
                            geometry={nodes["Cube 75"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-24.93, 26.38, -4.14]}
                            rotation={[-3, 0.56, 2.89]}
                            scale={1}
                        />
                        <mesh
                            name='Cube 53'
                            geometry={nodes["Cube 53"].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[26.02, 25.4, 9.41]}
                            rotation={[-0.06, -0.3, -0.21]}
                            scale={1}
                        />
                    </group>
                    <mesh
                        name='Cube 3'
                        geometry={nodes["Cube 3"].geometry}
                        material={materials["Cube 3 Material"]}
                        castShadow
                        receiveShadow
                        position={[133.24, 133.46, 84.98]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.45, 0.49, 1.29]}
                    />
                    <mesh
                        name='Cube 2'
                        geometry={nodes["Cube 2"].geometry}
                        material={materials["Cube 2 Material"]}
                        castShadow
                        receiveShadow
                        position={[133.24, 133.46, -7.62]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.45, 0.49, 1.29]}
                    />
                    <mesh
                        name='Cube 35'
                        geometry={nodes["Cube 35"].geometry}
                        material={materials["Cube 35 Material"]}
                        castShadow
                        receiveShadow
                        position={[111.75, 133.46, 84.98]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.45, 0.49, 1.29]}
                    />
                    <mesh
                        name='Cube1'
                        geometry={nodes.Cube1.geometry}
                        material={materials["Cube1 Material"]}
                        castShadow
                        receiveShadow
                        position={[111.75, 133.46, -7.62]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.45, 0.49, 1.29]}
                    />
                    <group
                        name='Box 2'
                        position={[101.8, 63.09, 232.69]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[0.43, 0.38, 0.38]}
                    >
                        <mesh
                            name='Cube 210'
                            geometry={nodes["Cube 210"].geometry}
                            material={materials["Cube 210 Material"]}
                            castShadow
                            receiveShadow
                            position={[0, 28.27, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.12, 1, 0.29]}
                        />
                        <mesh
                            name='Cube2'
                            geometry={nodes.Cube2.geometry}
                            material={materials["Cube2 Material"]}
                            castShadow
                            receiveShadow
                            position={[0.77, -4.34, -0.24]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.1, 1, 1]}
                        />
                    </group>
                    <group
                        name='Box 4'
                        position={[99.8, 123.86, 232.73]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[0.3, 0.2, 0.23]}
                    >
                        <mesh
                            name='Cube 211'
                            geometry={nodes["Cube 211"].geometry}
                            material={materials["Cube 211 Material"]}
                            castShadow
                            receiveShadow
                            position={[0, 28.27, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.12, 1, 0.29]}
                        />
                        <mesh
                            name='Cube3'
                            geometry={nodes.Cube3.geometry}
                            material={materials["Cube3 Material"]}
                            castShadow
                            receiveShadow
                            position={[0.77, -4.34, -0.24]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.1, 1, 1]}
                        />
                    </group>
                    <group
                        name='Box 3'
                        position={[99.8, 106.26, 232.73]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[0.34, 0.26, 0.34]}
                    >
                        <mesh
                            name='Cube 212'
                            geometry={nodes["Cube 212"].geometry}
                            material={materials["Cube 212 Material"]}
                            castShadow
                            receiveShadow
                            position={[0, 28.27, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.12, 1, 0.29]}
                        />
                        <mesh
                            name='Cube4'
                            geometry={nodes.Cube4.geometry}
                            material={materials["Cube4 Material"]}
                            castShadow
                            receiveShadow
                            position={[0.77, -4.34, -0.24]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.1, 1, 1]}
                        />
                    </group>
                    <group
                        name='Box'
                        position={[99.9, 58.91, 199.16]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[0.34, 0.26, 0.34]}
                    >
                        <mesh
                            name='Cube 213'
                            geometry={nodes["Cube 213"].geometry}
                            material={materials["Cube 213 Material"]}
                            castShadow
                            receiveShadow
                            position={[0, 28.27, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.12, 1, 0.29]}
                        />
                        <mesh
                            name='Cube5'
                            geometry={nodes.Cube5.geometry}
                            material={materials["Cube5 Material"]}
                            castShadow
                            receiveShadow
                            position={[0.77, -4.34, -0.24]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.1, 1, 1]}
                        />
                    </group>
                    <group name='Shelves' position={[102.22, 118.82, 211.67]}>
                        <mesh
                            name='Rectangle 4'
                            geometry={nodes["Rectangle 4"].geometry}
                            material={materials["Rectangle 4 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.26, -76.09, 1.62]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                            scale={[0.98, 1.12, 1]}
                        />
                        <mesh
                            name='Rectangle 3'
                            geometry={nodes["Rectangle 3"].geometry}
                            material={materials["Rectangle 3 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.26, -28.67, 1.62]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                            scale={[0.98, 1.12, 1]}
                        />
                        <mesh
                            name='Rectangle 2'
                            geometry={nodes["Rectangle 2"].geometry}
                            material={materials["Rectangle 2 Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.26, 27.03, 1.62]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                            scale={[0.98, 1.12, 1]}
                        />
                        <mesh
                            name='Rectangle'
                            geometry={nodes.Rectangle.geometry}
                            material={materials["Rectangle Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.26, 76.66, 1.62]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                            scale={[0.98, 1.12, 1]}
                        />
                        <mesh
                            name='Cube 122'
                            geometry={nodes["Cube 122"].geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[1.4, -81.06, 44.05]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[0.28, 0.51, 0.33]}
                        />
                        <mesh
                            name='Cube 114'
                            geometry={nodes["Cube 114"].geometry}
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
                            name='Cube 92'
                            geometry={nodes["Cube 92"].geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[1.4, 73.27, 44.05]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[0.28, 0.51, 0.33]}
                        />
                        <mesh
                            name='Cube 123'
                            geometry={nodes["Cube 123"].geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[1.4, -81.06, -41.12]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[0.28, 0.51, 0.33]}
                        />
                        <mesh
                            name='Cube 115'
                            geometry={nodes["Cube 115"].geometry}
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
                            name='Cube 64'
                            geometry={nodes["Cube 64"].geometry}
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
                            name='Cube 76'
                            geometry={nodes["Cube 76"].geometry}
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
                            name='Cube 54'
                            geometry={nodes["Cube 54"].geometry}
                            material={materials.Wood}
                            castShadow
                            receiveShadow
                            position={[-30.03, 0, -41.73]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.52, 0.7, 1.19]}
                        />
                    </group>
                    <group
                        name='Group 2'
                        position={[164.48, 287.79, 200.91]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.72, 0.99, 0.72]}
                    >
                        <mesh
                            name='Rectangle 21'
                            geometry={nodes["Rectangle 21"].geometry}
                            material={materials["Rectangle 21 Material"]}
                            castShadow
                            receiveShadow
                            position={[-4.27, 0.24, -1.08]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            name='Plane 21'
                            geometry={nodes["Plane 21"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[3.73, 0.62, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1, 1.02, 1]}
                        />
                    </group>
                    <mesh
                        name='Ellipse'
                        geometry={nodes.Ellipse.geometry}
                        material={materials["Ellipse Material"]}
                        castShadow
                        receiveShadow
                        position={[-57.27, 31.15, 41.65]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    />
                    <group name='Floor' position={[-53.16, 25.46, 37.66]}>
                        <mesh
                            name='Shelf 6'
                            geometry={nodes["Shelf 6"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, 209.5]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 5'
                            geometry={nodes["Shelf 5"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, 114.03]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 4'
                            geometry={nodes["Shelf 4"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, -70.85]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 51'
                            geometry={nodes["Shelf 51"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, 21.79]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 3'
                            geometry={nodes["Shelf 3"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, -163.08]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 61'
                            geometry={nodes["Shelf 61"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, 163.08]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 52'
                            geometry={nodes["Shelf 52"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, 67.61]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 41'
                            geometry={nodes["Shelf 41"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, -117.27]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 53'
                            geometry={nodes["Shelf 53"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, -24.62]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                        <mesh
                            name='Shelf 2'
                            geometry={nodes["Shelf 2"].geometry}
                            material={materials.Floor}
                            castShadow
                            receiveShadow
                            position={[0, 0, -209.5]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[2.14, 0.5, 0.54]}
                        />
                    </group>
                    <group name='Workspace' position={[98.74, 121.93, 36.47]}>
                        <group
                            name='Lamp'
                            position={[18.56, 40.85, -88.76]}
                            rotation={[0, 0.58, 0]}
                        >
                            <mesh
                                name='Cylinder 31'
                                geometry={nodes["Cylinder 31"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[-5.16, 16.36, -0.65]}
                                rotation={[Math.PI / 2, 0.56, -Math.PI / 2]}
                                scale={[0.2, 0.17, 0.2]}
                            />
                            <mesh
                                name='Cylinder 21'
                                geometry={nodes["Cylinder 21"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[13.79, -6.16, -0.57]}
                                rotation={[0, -Math.PI / 2, 0]}
                                scale={[0.2, 0.24, 0.2]}
                            />
                            <mesh
                                name='Cylinder4'
                                geometry={nodes.Cylinder4.geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[12.18, -36.81, 1.06]}
                                rotation={[0, -Math.PI / 2, 0]}
                                scale={[1, 0.13, 1]}
                            />
                        </group>
                        <group
                            name='Cup'
                            position={[-13.74, 10.16, -82.71]}
                            rotation={[0, 0.61, 0]}
                            scale={0.27}
                        >
                            <mesh
                                name='Cylinder 22'
                                geometry={nodes["Cylinder 22"].geometry}
                                material={materials.Floor}
                                castShadow
                                receiveShadow
                                position={[-467.34, -81.68, 776.42]}
                                rotation={[-Math.PI, -0.96, -Math.PI]}
                                scale={[3.74, 0.52, 3.74]}
                            />
                            <mesh
                                name='Cylinder5'
                                geometry={nodes.Cylinder5.geometry}
                                material={materials.Floor}
                                castShadow
                                receiveShadow
                                position={[3.18, -27.42, -4.24]}
                                rotation={[-Math.PI, -0.96, -Math.PI]}
                                scale={[3.74, 0.52, 3.74]}
                            />
                            <mesh
                                name='Torus'
                                geometry={nodes.Torus.geometry}
                                material={materials["Torus Material"]}
                                castShadow
                                receiveShadow
                                position={[-24.91, -1.64, -1.03]}
                                rotation={[Math.PI, 0, -Math.PI / 2]}
                                scale={[0.65, 0.58, 1]}
                            />
                            <mesh
                                name='Ellipse1'
                                geometry={nodes.Ellipse1.geometry}
                                material={materials["Ellipse1 Material"]}
                                castShadow
                                receiveShadow
                                position={[9.45, 19.96, 1.07]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={1}
                            />
                            <mesh
                                name='Cylinder6'
                                geometry={nodes.Cylinder6.geometry}
                                material={materials["Cylinder6 Material"]}
                                castShadow
                                receiveShadow
                                position={[6.52, 0, -1.38]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                        </group>
                        <group
                            name='Monitor'
                            position={[22.64, 79.6, -0.03]}
                            scale={1.04}
                        >
                            <mesh
                                name='Rectangle1'
                                geometry={nodes.Rectangle1.geometry}
                                material={materials["Rectangle1 Material"]}
                                castShadow
                                receiveShadow
                                position={[-46.26, -74.85, 1.96]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={0.96}
                            />
                            <mesh
                                name='Cube6'
                                geometry={nodes.Cube6.geometry}
                                material={materials.Metal}
                                castShadow
                                receiveShadow
                                position={[6.39, -30.5, 2.44]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[1, 0.78, 0.56]}
                            />
                            <mesh
                                name='Cube7'
                                geometry={nodes.Cube7.geometry}
                                material={materials.Metal}
                                castShadow
                                receiveShadow
                                position={[5, -55.43, 2.5]}
                                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[2.46, 0.65, 0.32]}
                            />
                            <mesh
                                name='Plane 22'
                                geometry={nodes["Plane 22"].geometry}
                                material={materials["Plane 22 Material"]}
                                castShadow
                                receiveShadow
                                position={[-3.57, 2.34, -0.26]}
                                rotation={[0, -Math.PI / 2, 0]}
                                scale={[1.01, 1.01, 1]}
                            />
                            <mesh
                                name='Rectangle2'
                                geometry={nodes.Rectangle2.geometry}
                                material={materials.Metal}
                                castShadow
                                receiveShadow
                                position={[3.57, 0, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                                scale={[1, 1.09, 1]}
                            />
                        </group>
                        <group
                            name='Table'
                            position={[0, -48.31, 0]}
                            scale={[0.85, 1, 1]}
                        >
                            <mesh
                                name='Rectangle 31'
                                geometry={nodes["Rectangle 31"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[-46.64, -37.68, 98.65]}
                                rotation={[-1.45, 1.55, -1.65]}
                                scale={[0.87, 0.64, 0.98]}
                            />
                            <mesh
                                name='Rectangle 22'
                                geometry={nodes["Rectangle 22"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[-46.59, -37.63, -94.98]}
                                rotation={[-1.45, 1.55, -1.65]}
                                scale={[0.87, 0.64, 0.98]}
                            />
                            <mesh
                                name='Rectangle 32'
                                geometry={nodes["Rectangle 32"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.96, -37.67, 96.02]}
                                rotation={[-1.57, -0.02, -3.13]}
                                scale={[0.88, 0.68, 0.81]}
                            />
                            <mesh
                                name='Rectangle3'
                                geometry={nodes.Rectangle3.geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.96, -37.67, -94.98]}
                                rotation={[-1.57, -0.02, -3.13]}
                                scale={[0.88, 0.68, 0.81]}
                            />
                            <mesh
                                name='Rectangle 41'
                                geometry={nodes["Rectangle 41"].geometry}
                                material={materials["Rectangle 41 Material"]}
                                castShadow
                                receiveShadow
                                position={[27.86, 64.02, 1.79]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[0.74, 0.53, 1]}
                            />
                            <mesh
                                name='Rectangle4'
                                geometry={nodes.Rectangle4.geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[0, 38.44, 0]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[0.83, 0.94, 1]}
                            />
                        </group>
                    </group>
                    <group name='Walls 2' position={[-51.68, 192.99, 49.1]}>
                        <mesh
                            name='Rectangle 23'
                            geometry={nodes["Rectangle 23"].geometry}
                            material={materials.Walls}
                            castShadow
                            receiveShadow
                            position={[249.73, 0.78, 0]}
                            rotation={[0, -1.57, 0]}
                            scale={[1, 0.76, 1]}
                        />
                        <mesh
                            name='Rectangle5'
                            geometry={nodes.Rectangle5.geometry}
                            material={materials.Walls}
                            castShadow
                            receiveShadow
                            position={[1.28, -200.21, -10.81]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[1.06, 1, 1]}
                        />
                    </group>
                    <group name='Walls' position={[-51.68, 192.99, 49.1]}>
                        <mesh
                            name='Rectangle 24'
                            geometry={nodes["Rectangle 24"].geometry}
                            material={materials.Walls}
                            castShadow
                            receiveShadow
                            position={[249.73, 0.78, 0]}
                            rotation={[0, -1.57, 0]}
                            scale={[1, 0.76, 1]}
                        />
                        <mesh
                            name='Rectangle6'
                            geometry={nodes.Rectangle6.geometry}
                            material={materials.Walls}
                            castShadow
                            receiveShadow
                            position={[1.28, -200.21, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={1}
                        />
                    </group>
                    <hemisphereLight
                        name='Default Ambient Light'
                        intensity={0.75}
                        color='#eaeaea'
                    />
                </scene>
            </group>
        </>
    );
}
