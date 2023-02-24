import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './experienceCart.css'

const ExperienceCard = ({ title, company, date, description }) => {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <FaBriefcase className="experience-card-icon" />
        <div className="experience-card-header-text">
          <h3>{title}</h3>
          <h4>{company}</h4>
        </div>
      </div>
      <div className="experience-card-body">
        <div className="experience-card-date">
          <p>{date}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
