import { useEffect } from "react";
import { useProjectsList } from "../../hooks";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
    const { data, isLoading } = useProjectsList();

    useEffect(() => {
        console.log("projects", data);
    }, [data]);

    if (isLoading || !data) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projects__list'>
                {data.map((item: ProjectCardProps) => (
                    <ProjectCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
