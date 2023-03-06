import React from "react";
import "./skillCard.css";

const SkillCard = (props) => {
  const { name, image } = props;
  return (
    <div className="skill-card">
      <div className="skill-card-img">
        <img src={image} alt={name} />
        {/* <div className="skill-card-img-overlay">
          <h3>{name}</h3>
        </div> */}
        
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default SkillCard;
