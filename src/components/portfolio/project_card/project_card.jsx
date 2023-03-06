import { useState } from "react";
import { motion } from "framer-motion";
import "./project_card.css";

const ProjectCard = ({ title, image, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="project-card">
      <motion.img
        src={image}
        alt={title}
        className="project-card-image"
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
      />
      {showDetails && (
        <motion.div
          className="project-card-popup"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <button onClick={handleClick}>Close</button>
          <h2>{title}</h2>
          <p>{description}</p>
          
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
