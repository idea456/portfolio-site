import * as three from "three";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Room";

export default function App() {
    const scroll = useRef(0);

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
            }}
        >
            <h1
                style={{
                    position: "absolute",
                    bottom: 90,
                    left: 50,
                    zIndex: 9999,
                    color: "#FF8E3C",
                    fontSize: 60,
                    width: 100,
                }}
            >
                Frontend developer,
            </h1>
            <h1
                style={{
                    position: "absolute",
                    bottom: 10,
                    left: 50,
                    zIndex: 9999,
                    color: "white",
                    fontSize: 60,
                }}
            >
                Adrienne Rio
            </h1>
            <Canvas shadows flat linear>
                <Suspense fallback={null}>
                    <Scene scroll={scroll} />
                </Suspense>
                <OrbitControls
                    minPolarAngle={0}
                    maxPolarAngle={1}
                    minAzimuthAngle={Math.PI}
                    maxAzimuthAngle={Math.PI * 1.55}
                    minDistance={200}
                    maxDistance={1000}
                />
            </Canvas>
        </div>
    );
}
