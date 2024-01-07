import { HomeIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { useProjectsList } from "../../hooks";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import "./Projects.scss";

type ProjectsProps = {
    setShowAboutMe: React.Dispatch<React.SetStateAction<boolean>>;
};

const Projects = ({ setShowAboutMe }: ProjectsProps) => {
    const { data, isLoading } = useProjectsList();

    if (isLoading || !data) {
        return <h1>Loading...</h1>;
    }

    const emitTransitionToMainScene = () => {
        window.dispatchEvent(new Event("transition-main-scene"));
    };

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projects__icons'>
                <InfoCircledIcon
                    width={100}
                    height={100}
                    onClick={() =>
                        setShowAboutMe((prevShowAboutMe) => !prevShowAboutMe)
                    }
                />
                <HomeIcon
                    width={100}
                    height={100}
                    onClick={emitTransitionToMainScene}
                />
            </div>
            <div className='projects__list'>
                {data.map((item: ProjectCardProps) => (
                    <>
                        <ProjectCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                        />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Projects;
