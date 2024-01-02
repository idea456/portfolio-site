import { Typewriter, PageTransition } from "../../components";
import "./AboutMePage.scss";

type AboutMePageProps = {
    show: boolean;
};

const AboutMePage = ({ show }: AboutMePageProps) => {
    return (
        <PageTransition show={show} className='about-me'>
            <Typewriter
                words="I'm a passionate frontend developer with a specialization in React,
        dedicated to continuous learning and creating new stuff_"
            />
            <div className='about-me__footer'>
                <h2>[Enter] Go to next page, [Esc] Exit</h2>
            </div>
        </PageTransition>
    );
};

export default AboutMePage;
