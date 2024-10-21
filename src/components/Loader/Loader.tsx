import React from "react";
import "./Loader.scss";
import { Html, useProgress } from "@react-three/drei";

const Loader: React.FC = () => {
    const { progress } = useProgress();

    return (
        <Html center className='loader'>
            <h1>Loading {progress}%...</h1>
        </Html>
    );
};

export default Loader;
