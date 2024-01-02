import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { Room } from "./components/Room";
import { Loader } from "./components/Loader";
import "./App.scss";

export default function App() {
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 32 && e.target == document.body) {
                e.preventDefault();
            }
        });
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div className='app'>
                <div className='name'>
                    <h1>Adrienne Rio</h1>
                    <h2>Frontend developer</h2>
                </div>

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
                        <Room />;
                    </PresentationControls>
                </Canvas>
            </div>
        </Suspense>
    );
}
