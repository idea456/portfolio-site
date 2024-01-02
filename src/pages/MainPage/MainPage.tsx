import { useState, useEffect } from "react";
import { AboutMePage } from "../AboutMe";
import { Projects } from "../Projects";
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
            <Projects />
        </div>
    );
};

export default MainPage;
