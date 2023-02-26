import React from "react";
import "./portfolio.css"
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import ProjectCard from "./project_card/project_card"
import reactLogo from "./tech_project.jpg"


const Portfolio = (props) => {
    return (
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


            <SideBar />
            <ThemeIcon {...props} />
        </div>
    )
};

export default Portfolio;