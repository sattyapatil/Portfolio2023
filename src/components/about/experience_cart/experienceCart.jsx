import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { BsCalendar } from "react-icons/bs";
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
        
        <p>{description}</p>
        <div className="experience-card-date">
          <BsCalendar className="education-card-icon" />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
