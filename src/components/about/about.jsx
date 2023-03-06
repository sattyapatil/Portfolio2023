import React from "react";
import { HiArrowSmDown } from 'react-icons/hi'
import { FaPython, FaCss3Alt, FaHtml5, FaReact, FaAws } from 'react-icons/fa';
import { SiFlask, SiSqlite, SiMongodb, SiJavascript, SiFastapi } from 'react-icons/si';
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import { motion } from 'framer-motion';
import "./about.css"
import myPhoto from './satish4.png';
import ProfilePictureCart from "../profile_picture_cart/ProfilePictureCart";
import ExperienceCard from "./experience_cart/experienceCart";
import EducationCard from "./education_cart/educationCart";
// import SkillCard from "./skill_card/skillCard"
import SkillCard from "./skill_card_new/skill"
import Button from "../button/about_me_button"


function About(props) {
    const pageVariants = {
        initial: {
          opacity: 0,
          x: "-1000vw"
        },
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
        }
      };
      
      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
      };

  return (
    <div>
        <motion.div
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
        >


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
                                <Button text="Download Resume" onClick={()=>{window.open('https://drive.google.com/file/d/18WI2nAAfHs0_hcCqMpZgz7K5i1rV5Tmp/view?usp=sharing', '_blank');}} icon={<HiArrowSmDown />} />
                                {/* <a href="https://drive.google.com/file/d/18WI2nAAfHs0_hcCqMpZgz7K5i1rV5Tmp/view?usp=sharing" download>Download Resume</a> */}
                            </div>
                        </div>
                    </div>
                   
                   
                </div>

                <div className="end-line"></div>    

                <div>
                    {/* <h1 className="heading">Experience & Education</h1> */}
                </div>
                <div className="experience-education">
                    
                    <div className="experience">
                        <h1 className="heading">Experience</h1>
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
                    <h1 className="heading">Education</h1>
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
                        skill='Python' icon={<FaPython className="social-icon python" x="30" y="30" />} percentage={95}
                        />
                        <SkillCard
                        skill='Flask' icon={<SiFlask className="social-icon flask" x="30" y="30" />} percentage={90}
                        />
                        <SkillCard
                        skill='FastAPI' icon={<SiFastapi className="social-icon fastapi" x="30" y="30" />} percentage={70}
                        />
                        <SkillCard
                        skill='SQL' icon={<SiSqlite className="social-icon sqlite" x="30" y="30" />} percentage={70}
                        />
                        <SkillCard
                        skill='Mongodb' icon={<SiMongodb className="social-icon mongodb" x="30" y="30" />} percentage={70}
                        />
                        
                        
                    </div>
               
                    <div className='skill-inner'>
                    <SkillCard
                        skill='HTML' icon={<FaHtml5 className="social-icon html" x="30" y="30" />} percentage={70}
                        />
                        <SkillCard
                        skill='CSS' icon={<FaCss3Alt className="social-icon css" x="30" y="30" />} percentage={70}
                        />
                        <SkillCard
                        skill='JavaScript' icon={<SiJavascript className="social-icon javascript" x="30" y="30" />} percentage={80}
                        />
                        <SkillCard
                        skill='React' icon={<FaReact className="social-icon react" x="30" y="30" />} percentage={60}
                        />
                         <SkillCard
                        skill='React Native' icon={<FaReact className="social-icon react" x="30" y="30" />} percentage={70}
                        />
                        
                    </div>
                    <div className='skill-inner'>
                    <SkillCard
                        skill='Lambada' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={80}
                        />
                        <SkillCard
                        skill='SNS' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={70}
                        />
                        <SkillCard
                        skill='SQS' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={80}
                        />
                        <SkillCard
                        skill='Dynamodb' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={70}
                        />
                         <SkillCard
                        skill='Cognito' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={70}
                        />
                    </div>
                    <div className='skill-inner'>
                    <SkillCard
                        skill='IOT Core' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={70}
                        />
                         <SkillCard
                        skill='EC2' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={80}
                        />
                        <SkillCard
                        skill='S3' icon={<FaAws className="social-icon aws" x="30" y="30" />} percentage={70}
                        />
                    </div>
                    
                </div>
            </div>
        </motion.div>

                
        <SideBar />
        <ThemeIcon {...props} />
    </div>
    )
};

export default About;