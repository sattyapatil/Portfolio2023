import React from "react";
import { BsCalendar } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import "./educationCart.css"

const EducationCard = ({ university, degree, field, startDate, endDate }) => {
  return (
    <div className="education-card">
      <div className="education-card-header">
        <FaGraduationCap className="education-card-icon" />
        <div className="education-card-header-text">
          <h3>{university} </h3>
          <h4>{degree} </h4>
        </div>
      </div>
      <div className="education-card-body">
        <p>{field}</p>
        <div className="education-card-date">
          <BsCalendar className="education-card-icon" />
          <p>
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
