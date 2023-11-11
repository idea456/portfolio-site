import React from "react";
import gsap from "gsap";
import Scene from "./Scene";
import { useThree } from "@react-three/fiber";

const Room = () => {
    const monitorRef = React.useRef(null);
    const tlRef = React.useRef<GSAPTimeline | null>(null);
    const { camera } = useThree();

    const onScrollWheel = () => {
        const monitorPosition = monitorRef.current?.monitor.position;

        tlRef.current
            .to(camera.position, {
                x: monitorPosition.x - 110,
                // y: monitorPosition.y + 180,
                y: monitorPosition.y + 170,
                z: monitorPosition.z - 60,
                duration: 2,
                ease: "power4.out",
            })
            .to(
                camera.rotation,
                {
                    x: 0,
                    y: -0.8,
                    z: 0,
                    ease: "power4.out",
                    duration: 2,
                    onComplete: () => {
                        camera.updateProjectionMatrix();
                    },
                },
                "-=2",
            );
        //     .to(camera.position, {
        //         x: "+=26",
        //         z: "-=28",
        //         y: "+=1",
        //         duration: 2,
        //         delay: 1,
        //         ease: "power4.out",
        //     })
        //     .to(camera.position, {
        //         x: "-=26",
        //         z: "+=28",
        //         y: "-=1",
        //         duration: 2,
        //         delay: 1,
        //         ease: "power4.out",
        //     });
    };

    React.useLayoutEffect(() => {
        tlRef.current = gsap.timeline({});
        window.addEventListener("wheel", onScrollWheel);
    }, []);

    return <Scene ref={monitorRef} />;
};

export default Room;
