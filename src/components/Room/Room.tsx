import React from "react";
import {
    CameraControls,
    PerspectiveCamera,
    useBounds,
} from "@react-three/drei";
import {
    Group,
    Object3DEventMap,
    type PerspectiveCamera as PerspectiveCameraThree,
} from "three";
import gsap from "gsap";
import Scene from "./Scene";
import { useControls } from "leva";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Room = () => {
    const monitorRef = React.useRef(null);
    const tlRef = React.useRef<GSAPTimeline | null>(null);
    const tlRef2 = React.useRef<GSAPTimeline | null>(null);
    const { camera, controls } = useThree();
    const bounds = useBounds();
    // const { cameraPosition, cameraRotation } = useControls({
    //     cameraPosition: {
    //         value: { x: 0, y: 0, z: 0 },
    //     },
    //     cameraRotation: {
    //         value: { x: 0, y: 0, z: 0 },
    //     },
    // });

    // useFrame(() => {
    //     camera.position.x = cameraPosition.x;
    //     camera.position.y = cameraPosition.y;
    //     camera.position.z = cameraPosition.z;
    //     camera.rotation.x = cameraRotation.x;
    //     camera.rotation.y = cameraRotation.y;
    //     camera.rotation.z = cameraRotation.z;
    // });

    React.useLayoutEffect(() => {
        tlRef.current = gsap.timeline({});
        // tlRef2.current = gsap.timeline({});
        // window.addEventListener("scroll", onScroll);
        const monitorPosition = monitorRef.current?.position;
        const plane = new THREE.Box3();
        plane.setFromObject(monitorRef?.current);
        // const monitorCenter = plane.getCenter(new THREE.Vector3());
        // console.log(monitorCenter);
        // camera.lookAt(monitorCenter);

        tlRef.current
            .to(camera.position, {
                x: monitorPosition.x - 110,
                y: monitorPosition.y + 180,
                z: monitorPosition.z + 30,
                duration: 2,
                delay: 1,
                ease: "power4.out",
            })
            .to(
                camera.rotation,
                {
                    x: 0,
                    y: -0.9,
                    z: 0,
                    ease: "power4.out",
                    duration: 2,
                    onComplete: () => {
                        camera.updateProjectionMatrix();
                    },
                },
                "-=2",
            )
            .to(camera.position, {
                x: "+=26",
                z: "-=28",
                y: "+=1",
                duration: 2,
                delay: 1,
                ease: "power4.out",
            });
        // .to(monitorRef?.current?.scale, {
        //     x: 1.8,
        //     y: 1.8,
        //     z: 1.8,
        //     ease: "power4.out",
        //     duration: 1,
        // })
        // .to(monitorRef?.current?.scale, {
        //     x: 1,
        //     y: 1,
        //     z: 1,
        //     ease: "power4.out",
        //     delay: 1,
        //     duration: 1,
        // });
    }, []);

    const onScroll = () => {
        // console.log("scrolling");
        // const monitorPosition = monitorRef.current?.position;
        // const monitorAngle = monitorRef.current?.rotation;
        // if (tlRef.current) {
        //     console.log("monitor", monitorRef.current);
        //     bounds.refresh(monitorRef.current).fit();
        // }
        // tlRef.current
        //     .to(camera.position, {
        //         // x: -100,
        //         // y: 125,
        //         // z: 40,
        //         x: monitorPosition.x - 100,
        //         y: monitorPosition.y + 120,
        //         z: monitorPosition.z + 30,
        //         duration: 2,
        //     })
        //     .to(
        //         camera.rotation,
        //         {
        //             x: 0,
        //             y: -0.8,
        //             z: 0,
        //             // x: monitorAngle._x,
        //             // y: monitorAngle._y,
        //             // z: monitorAngle._z,
        //             onComplete: () => {
        //                 camera.zoom(2);
        //             },
        //             duration: 2,
        //         },
        //         "-=2",
        //     )
        //     .to(camera.position, {
        //         // x: "+=100",
        //         // y: "+=50",
        //         // z: "+=50",
        //     });
    };

    return (
        <>
            {/* <PerspectiveCamera
                name='Camera 2'
                aspect={window.innerWidth / window.innerHeight}
                makeDefault
                far={10000}
                near={1}
                position={[-1000, 100, 0]}
                rotation={[0, -1.5, 0]}
                scale={1}
                fov={60}
            /> */}
            {/* <CameraControls camera={camera} /> */}
            <Scene ref={monitorRef} />
        </>
    );
};

export default Room;
