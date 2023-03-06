// SkillCard.js
import React from "react";
import { motion } from "framer-motion";
import "./skill.css"

const SkillCard = ({ icon, skill, percentage }) => {
  // Define the animation variants for the border
  const variants = {
    initial: { pathLength: 0 },
    animate: { pathLength: percentage / 100 },
  };

  // Define the color for the border based on percentage
  const getColor = (percentage) => {
    if (percentage >= 80) return "green";
    if (percentage >= 50) return "yellow";
    return "red";
  };

  // Define the stroke width for the border based on screen size
  const getStrokeWidth = () => {
    if (window.innerWidth >= 768) return "10";
    return "5";
  };

 
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {/* Use an SVG element to include both the circle and the image */}
        <svg className="svg" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            transition={{ delay: 0.1, duration: 0.1 }}
            fill="transparent"
            stroke={getColor(percentage)}
            strokeWidth={getStrokeWidth()}
            variants={variants}
            initial="initial"
            whileHover={"animate"}
            // animate={'animate'}
            className="svg-container"
          />
            {icon}
        </svg>
      </div>
      <div className="skill-name">{skill}</div>
    </div>
  );
};

export default SkillCard;