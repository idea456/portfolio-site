import { useState, useEffect } from "react";
import { AboutMePage } from "../AboutMe";
import "./MainPage.scss";
import { PixelTransition } from "../../components";

const MainPage = () => {
    const [showAboutMe, setShowAboutMe] = useState(true);
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                console.log("setting show to", !showAboutMe);
                setShowAboutMe((prevShowAboutMe) => !prevShowAboutMe);
            }
        });
    }, []);

    return (
        <div className='main-page'>
            <PixelTransition show={showAboutMe} />
            <AboutMePage show={showAboutMe} />
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 200,
                    background: "red",
                }}
            >
                Projects
            </div>
        </div>
    );
};

export default MainPage;
