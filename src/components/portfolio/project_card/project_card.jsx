import React from 'react';
import './project_card.css'

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-techs">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
