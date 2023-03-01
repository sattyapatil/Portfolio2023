// SkillCard.js
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium} from 'react-icons/fa';
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
        <svg width="80" height="80" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke={getColor(percentage)}
            strokeWidth={getStrokeWidth()}
            variants={variants}
            initial="initial"
            whileHover="animate"
          />
          {/* Use an image tag as a child of SVG */}
            <FaTwitter className="social-icon twitter" x="30" y="30" />
          {/* <image
            href={icon}
            x="15"
            y="15"
            width="70"
            height="70"
          /> */}
        </svg>
      </div>
      <div className="skill-name">{skill}</div>
    </div>
  );
};

export default SkillCard;