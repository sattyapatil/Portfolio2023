import React from 'react';
import { motion } from 'framer-motion';
import './social_media_card.css';

const SocialMediaCard = ({ name, icon, link }) => {
  return (
    <motion.a href={link} target="_blank" rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="social-media-link"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="social-media-icon"
      >
        {icon}
      </motion.div>
      <p className="social-media-name">{name}</p>
    </motion.a>
  );
};

export default SocialMediaCard;
