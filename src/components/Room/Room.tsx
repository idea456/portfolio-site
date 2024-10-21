// import Scene from "./models/Scene";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { lazy } from "@loadable/component";
import { Suspense } from "react";
import { Loader } from "../Loader";

const LazyScene = lazy(() => import("./models/Scene"));

const Room = () => {
    return (
        <Canvas
            shadows
            flat
            linear
            camera={{
                near: 1,
                far: 10000,
                position: [-1000, 300, 0],
                scale: 1,
                fov: 50,
            }}
            style={{
                touchAction: "none",
            }}
        >
            <color attach='background' args={["#f5eedf"]} />
            <PresentationControls
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 2, tension: 300 }}
                zoom={0.8}
                rotation={[0, Math.PI, 0]}
                polar={[0, 0]}
                azimuth={[-0.8, 0.8]}
            >
                <Suspense fallback={<Loader />}>
                    <LazyScene />
                </Suspense>
            </PresentationControls>
        </Canvas>
    );
};

export default Room;
