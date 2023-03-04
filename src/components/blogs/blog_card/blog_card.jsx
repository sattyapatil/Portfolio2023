import React from 'react';
import { motion } from 'framer-motion';
import './blog_card.css';

const BlogCard = ({ title, categories, url, imageUrl }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="blog-card"
    >
      <div className="blog-card-image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3>{title}</h3>
        <div className="project-techs">
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default BlogCard;
