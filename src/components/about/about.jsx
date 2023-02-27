import React from "react";
import { HiArrowSmDown } from 'react-icons/hi'
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import "./about.css"
import myPhoto from './satish4.png';
import reactLogo from './logo192.png'
import pythonLogo from './python.png'
import flaskLogo from './flask.png'
import sqlLogo from './sql.png'
import mongodbLogo from './mongodb.png'
import htmlLogo from './html.png'
import cssLogo from './css.png'
import jsLogo from './js.png'
import ProfilePictureCart from "../profile_picture_cart/ProfilePictureCart";
import ExperienceCard from "./experience_cart/experienceCart";
import EducationCard from "./education_cart/educationCart";
import SkillCard from "./skill_card/skillCard"
import Button from "../button/about_me_button"


function About(props) {

    return (
        <div>
            <div className="about-me">
                <div>
                    <h1 className="heading">Personal Info</h1>
                </div>
                <div className="personal-info">
                    <div className="pesonal-info-inner">
                        <div className="photo">
                            <img src={myPhoto} alt="My Photo" />
                        </div>
                        <div className="info">
                            <h2>Satish Pophale</h2>
                            <h3>Full Stack Developer (Python)</h3>
                            <p>
                            Tech-savvy full-stack Python developer with a passion for creating innovative solutions. 
                            Proficient in multiple frameworks and always eager to learn.
                            </p>
                            <div class="resume-button">
                                <Button text="Download Resume" onClick={()=>{console.log("My name is Satish")}} icon={<HiArrowSmDown />} />
                                {/* <a href="/path/to/cv.pdf" download>Download Resume</a> */}
                            </div>
                        </div>
                    </div>
                   
                   
                </div>

                <div className="end-line"></div>    

                <div>
                    <h1 className="heading">Experience & Education</h1>
                </div>
                <div className="experience-education">
                    <div className="experience">
                        <ExperienceCard
                            title="SDE - Backend Developer"
                            company="Phynart"
                            date="July 2021 - Present"
                            // location="Patil Nagar, Bavdhan, Pune, 411021"
                            description="As a key contributor to the development team, I had the privilege to work on home automation products that made life easier for millions. My expertise in developing SDKs, microservices, and APIs allowed me to tackle complex challenges in multiple domains, including IOT, AI and Cloud."
                            />
                        <ExperienceCard
                            title="Full Stack Developer"
                            company="Apprely"
                            date="March 2020 - June 2021"
                            // location="Patil Nagar, Bavdhan, Pune, 411021"
                            description=" At Apprely, I had the opportunity to work on a diverse range of projects in multiple domains, including agriculture, finance, and e-commerce. My role involved developing web and mobile applications across various platforms, which helped me sharpen my skills and adapt to new challenges."
                            />

                        <ExperienceCard
                            title="Application Developer"
                            company="Confluex"
                            date="March 2019 - June 2020"
                            // location="Patil Nagar, Bavdhan, Pune, 411021"
                            description="As a fresher, I had the privilege of working in a dynamic startup environment, which provided me with a wealth of learning opportunities. I was involved in developing multiple projects from scratch, including a fund management platform and a multi-tenant platform. This gave me hands-on experience in software development and exposed me to different aspects of project management."
                            />
                    </div>
                    <div className="education">
                        <EducationCard 
                            university="BE"
                            degree="Pune Univercity"
                            field="Electronics and Telemmunication"
                            startDate="Sep - 2015"
                            endDate="Sep - 2018"
                        />

                        <EducationCard 
                            university="Deploma"
                            degree="Govenment polytechnic, Ambad"
                            field="Electronics"
                            startDate="Sep - 2012"
                            endDate="Sep - 1015"
                        />
                    </div>

                </div>
                <div className="end-line"></div>

                <div>
                    <h1 className="heading">Skills</h1>
                </div>
                <div className='skill-container'>
                    <div className='skill-inner'>
                        <SkillCard
                        name='Python' image={pythonLogo}
                        />
                        <SkillCard
                        name='Flask' image={flaskLogo}
                        />
                        <SkillCard
                        name='SQL' image={sqlLogo}
                        />
                        <SkillCard
                        name='Mongodb' image={mongodbLogo}
                        />
                        
                    </div>
               
                    <div className='skill-inner'>
                        <SkillCard
                        name='HTML' image={htmlLogo}
                        />
                        <SkillCard
                        name='CSS' image={cssLogo}
                        />
                        <SkillCard
                        name='JavaScript' image={jsLogo}
                        />
                        <SkillCard
                        name='react' image={reactLogo}
                        />
                        
                    </div>
                </div>

                

            </div>

            <SideBar />
            <ThemeIcon {...props} />
        </div>
    )
};

export default About;