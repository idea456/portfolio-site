import { Typewriter, PageTransition } from "../../components";
import "./AboutMePage.scss";

type AboutMePageProps = {
    show: boolean;
};

const AboutMePage = ({ show }: AboutMePageProps) => {
    return (
        <PageTransition show={show} className='about-me'>
            {/* <Typewriter words="Hey there! I'm a frontend developer who's motto is to constantly improve and learn. I'm all about diving into new things, creating stuff from scratch, and playing around with different ideas_" /> */}
            <Typewriter
                words={`Hey there, thanks for checking this place out ( ~*-*)~_`}
            />
            <Typewriter
                words={`I'm Adrienne, a full-stack developer who's just likes databases, making things with the latest tech and inventing new stuff along the way_`}
            />
            <div className='about-me__footer'>
                <h2>[Enter] Go to next page, [Esc] Exit</h2>
            </div>
        </PageTransition>
    );
};

export default AboutMePage;
