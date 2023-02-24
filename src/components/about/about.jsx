import React from "react";
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import "./about.css"
import myPhoto from './logo192.png';
import ProfilePictureCart from "../profile_picture_cart/ProfilePictureCart";
import ExperienceCard from "./experience_cart/experienceCart";



function About(props) {

    return (
        <div>
            <div className="about-me">
                <div>
                    <h1 className="heading">Personal Info</h1>
                </div>
                <div className="personal-info">
                    <div className="info">
                        <h2>John Doe</h2>
                        <h3>Web Developer</h3>
                        <p>To leverage my skills and experience in web development to contribute to a dynamic and innovative organization.</p>
                        <div class="resume-button">
                            <a href="/path/to/cv.pdf" download>Download Resume</a>
                        </div>
                    </div>
                   
                    <div className="photo">
                        <img src={myPhoto} alt="My Photo" />
                    </div>
                </div>

                <div className="end-line"></div>    

                <div>
                    <h1 className="heading">Experience & Education</h1>
                </div>
                <div className="experience-education">
                    {/* <div className="experience">
                        <div>
                            <p>Company: Phynart</p>
                            <p>Designation: SDE</p>
                            <p>Responsibilities: Managing and devloping apis</p>
                        </div>
                    </div>
                    <div className="education">
                        <div>
                            <p>Company: Phynart</p>
                            <p>Designation: SDE</p>
                            <p>Responsibilities: Managing and devloping apis</p>
                        </div>
                    </div> */}
                    <ExperienceCard
                        company="ABC Company"
                        position="Web Developer"
                        date="Jan 2020 - Present"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt ut lorem sed bibendum. Nulla facilisi."
                        />

                </div>


                <div className="end-line"></div>
                <div className="end-line"></div>

                

            </div>

            <SideBar />
            <ThemeIcon {...props} />
        </div>
    )
};

export default About;