import React from "react";
import "./experienceCart.css"

function ExperienceCard(props) {
  const { company, position, date, description } = props;

  return (
    <div className="experience-card">
      <h3>{company}</h3>
      <h4>{position}</h4>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceCard;
