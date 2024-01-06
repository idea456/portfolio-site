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
            <div className='project-card'>
                {/* <img loading='lazy' src={imgSrc} onClick={() => window.open(url)} /> */}
                <a onClick={() => window.open(url)}>{title}</a>
                <span>{description}</span>
            </div>
        );
    },
);
