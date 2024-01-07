import { useState, useEffect } from "react";
import { AboutMePage } from "../AboutMe";
import { Projects } from "../Projects";
import "./MainPage.scss";
import { PixelTransition } from "../../components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MainPage = () => {
    const [showAboutMe, setShowAboutMe] = useState(true);
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                setShowAboutMe((prevShowAboutMe) => !prevShowAboutMe);
            }
        });
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div className='main-page'>
                <PixelTransition show={showAboutMe} />
                <AboutMePage show={showAboutMe} />
                <Projects setShowAboutMe={setShowAboutMe} />
            </div>
        </QueryClientProvider>
    );
};

export default MainPage;
