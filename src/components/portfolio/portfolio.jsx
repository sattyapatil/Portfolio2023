import React from "react";
import { motion } from 'framer-motion';
import "./portfolio.css"
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import ProjectCard from "./project_card/project_card"
import reactLogo from "./tech_project.jpg"


const Portfolio = (props) => {


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
                    <div className="portfolio-main-container">
                        <h1 className="heading">Portfolio</h1>

                        <div className="portfolio-sub-container">

                            <ProjectCard
                                title="Nova" 
                                description="Home automation" 
                                image={reactLogo}
                                technologies={["Python", "flask"]}
                                link="https://google.com"
                            />

                            <ProjectCard
                                title="Nova" 
                                description="Home automation" 
                                image={reactLogo} 
                                technologies={["Python", "flask"]}
                                link="https://google.com"
                            />
                        </div>

                        <div className="portfolio-sub-container">

                            <ProjectCard
                                title="Nova" 
                                description="Home automation" 
                                image={reactLogo}
                                technologies={["Python", "flask"]}
                                link="https://google.com"
                            />

                            <ProjectCard
                                title="Nova" 
                                description="Home automation" 
                                image={reactLogo}
                                technologies={["Python", "flask"]}
                                link="https://google.com"
                            />
                        </div>
                        
                    </div>
                </motion.div>
                <SideBar />
                <ThemeIcon {...props} />
            </div>
    )
};

export default Portfolio;