import React from "react";
import "./ProjectCard.scss";

export type ProjectCardProps = {
    title: string;
    description: string;
    url: string;
};

export const ProjectCard = React.memo(
    ({ title, description, url }: ProjectCardProps) => {
        return (
            <div className='project-card' onClick={() => window.open(url)}>
                <a>{title}</a>
                <span>{description}</span>
            </div>
        );
    },
);
