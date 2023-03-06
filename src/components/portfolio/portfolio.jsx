import React from "react";
import { motion } from 'framer-motion';
import "./portfolio.css"
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import ProjectCard from "./project_card/project_card"
import reactLogo from "./tech_project.jpg"
import homeAutomation from "./home_automation.jpg"
import biofuelCircle from "./biofuel_circle.jpg"
import fundMangementPlatform from "./fund_management_platform.jpg"
import AIPlatform from "./ai_platform.jpg"


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
                                title="Home Automation Product" 
                                description="This home automation project aimed to provide users with a seamless way to control their home appliances and devices remotely. The project required the development of various software components, including the software development kit (SDK), microservices, and APIs. My role as a developer was to design, develop, and maintain these software components, ensuring seamless integration with the hardware components. In addition, I was responsible for researching new technologies and implementing new features to enhance the user experience. I worked closely with the app and hardware teams, conducting code reviews, troubleshooting issues, and discussing new ideas and features. Through this project, I showcased my skills in software development and demonstrated my ability to work collaboratively in a team environment to deliver high-quality solutions that met the needs of the end-users." 
                                image={homeAutomation}
                                technologies={["Python", "flask"]}
                                link="https://google.com"
                            />

                            <ProjectCard
                                title="Biofuel Circle Mobile App" 
                                description="This Biofuel Mobile Application project aimed to simplify the transportation of bio dump from farmers to biofuel companies. The app provided end-to-end logistics management, enabling farmers to easily schedule bio dump pick-ups and biofuel companies to efficiently manage their transportation and delivery needs. As a developer, my role in this project was to design, develop and maintain the mobile application using React Native. I collaborated closely with the app and backend development teams to ensure seamless integration between the front-end and back-end systems. Additionally, I was responsible for troubleshooting issues, conducting code reviews, and implementing new features to enhance the user experience. Through this project, I showcased my skills in mobile application development and demonstrated my ability to work collaboratively in a team environment to deliver high-quality solutions that met the needs of the end-users" 
                                image={biofuelCircle} 
                                technologies={["Python", "flask"]}
                                link="https://google.com"
                            />
                        </div>

                        <div className="portfolio-sub-container">

                            <ProjectCard
                                title="Fund Management Platform" 
                                description="The Fund Management Platform project aimed to simplify the management and analysis of funds for fund managers. The platform provided a comprehensive dashboard for fund managers to track their portfolio, analyze risks, and make data-driven decisions. As a developer, my role in this project involved developing various software components such as web scrapers, databases, front-end interfaces, and APIs. I was responsible for scraping data from various web sources, storing it in a database, analyzing the data, and displaying it on the front-end dashboard. In addition, I worked on developing APIs to integrate the platform with other systems. My responsibilities also included conducting code reviews, troubleshooting issues, and implementing new features to enhance the user experience. Through this project, I showcased my skills in software development and demonstrated my ability to work collaboratively in a team environment to deliver high-quality solutions that met the needs of the end-users." 
                                image={fundMangementPlatform}
                                technologies={["Python", "flask"]}
                                link="https://google.com"
                            />

                            <ProjectCard
                                title="AI Platform" 
                                description="The AI Platform project aimed to provide a centralized hub for the latest advancements, news, and research related to AI. The platform integrated various social media channels, including Twitter, Instagram, Facebook, and Medium, as well as research paper publishing sites, to showcase trending topics related to AI. As the sole developer of this personal project, my responsibilities included designing and developing the platform from scratch. I was responsible for developing the back-end and front-end systems, integrating the social media and research sites' APIs, and building a user-friendly interface. Additionally, I was responsible for conducting research to stay up-to-date with the latest AI advancements and trends to ensure that the platform provided the most relevant and informative content to users. Through this project, I showcased my skills in full-stack development, API integration, and research, demonstrating my ability to work independently to deliver a high-quality solution that met the needs of the end-users." 
                                image={AIPlatform}
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