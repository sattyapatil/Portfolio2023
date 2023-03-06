import React, {useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './blogs.css'
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import BlogCard from "../blogs/blog_card/blog_card"


function Blogs (props) {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@satish-p&limit=50";
    const [posts, setPosts] = useState([]);
    
      useEffect(() => {
        async function fetchPosts() {
          const response = await fetch(mediumURL);
          const data = await response.json();
          setPosts(data.items);
          console.log(data.items)
        }
        fetchPosts();
      }, []);

      const pageVariants = {
        initial: {
          opacity: 0,
          x: "-100vw"
        },
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
          x: "100vw"
        }
      };
      
      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
      };
    
   

    return (
      <div className="main">
         <motion.div
                className="main"
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
                
                >
          <div className="main-container">
              <h1 className="heading">Blogs</h1>
              <div className="blog-card-container">
                <div className="inner-container">
                {posts.map(post => (
                      <BlogCard 
                      title={post.title}
                      categories={post.categories}
                      url ={post.link}
                      imageUrl = {post.thumbnail}                 
                      />
                      // <div key={post.guid}>
                      // <h3>{post.title}</h3>
                      // <p>{post.pubDate}</p>
                      // <p>{post.description}</p>
                      // </div>
                  ))}
                
                </div>
              </div>
          </div>
        </motion.div>
        <SideBar />
        <ThemeIcon {...props} />
      </div>
    )
}

export default Blogs;