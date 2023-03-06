import React from 'react';
import { motion } from 'framer-motion';
import './about_me_button.css';

const Button = ({ text, onClick, icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="button"
    >
      <motion.span
        className="background"
        animate={{
          backgroundColor: ["#fae902", "#40fa02"]
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
       <div className="button-text">
        {text}
       </div>
       <div className="button-icon">
        {icon}
       </div>
      
    </motion.button>
  );
};

export default Button;
