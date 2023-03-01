import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import { HiArrowSmRight } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaMedium} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './home.css'
import ProfilePictureCart from '../profile_picture_cart/ProfilePictureCart.jsx'
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import InitialLoader from "../loaders/initial_loader/initialLoader"
import SocialMediaCard from "../social_media_card/social_media_card";
import Button from "../button/about_me_button"

function Home(props) {

    const [width, setWindowWidth] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
       
    function demoAsyncCall() {
      return new Promise((resolve) => setTimeout(() => resolve(), 20));
      }

      const navigate = useNavigate();
      
        const onClick = () => {
          navigate('/about');
        };

    // useEffect(() => { 

    //     updateDimensions();
   
    //     window.addEventListener("resize", updateDimensions);   
        
    //     demoAsyncCall().then(() => setIsLoading(false));

    //     return () => window.removeEventListener("resize",updateDimensions); }, 
        
    //     [width]
        
    //     )    
          
    // const updateDimensions = () => {
    //      const width = window.innerWidth
    //      console.log(width)
    //      setWindowWidth(width)

    //      // Importing files depending on width of screen
    //     if (width<1024) import (`./homeMobile.css`);
    //     if (width>1024) import (`./home.css`);
    //    }

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
        // isLoading ? <InitialLoader />:
        <div className="main">
            <motion.div
                className="main"
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
                >
                <div className='App-home'>
                    <div className='Container-profile-picture-cart'>
                        {/* <ProfilePictureCart /> */}
                    </div>
                    <ProfilePictureCart />
                    <div className='Container-info'>
                        <div className='title-text-container'>
                            <text className='title-text'>I'm SATISH POPHALE</text>
                            
                        </div>

                        <text className='sub-text-role'>FULL-STACK DEVELOPER</text>

                        <div className='sub-text-container'>
                            <text className='sub-text'>I'm software developer with 3+ years of experience. My most of the experience in app developer.</text>
                        </div>

                        <div className='about-me-button'>
                            {/* <div className='about-me-button-text-container'>
                                <text>About me</text>
                            </div>
                            <div className='about-me-button-icon-container'>
                                <HiArrowSmRight />
                            </div> */}
                            <Button text="About Me" onClick={()=>onClick()} icon={<HiArrowSmRight />} />
                        </div>

                        <div className="social-field-container">
                            <SocialMediaCard  
                                name='linkedin' icon={<FaLinkedin className="social-icon linkedin" />} link={'https://linkedin.com'}
                            />
                            <SocialMediaCard  
                                name='github' icon={<FaGithub className="social-icon github" />} link={'https://github.com'}
                            />
                            <SocialMediaCard  
                                name='twitter' icon={<FaTwitter className="social-icon twitter" />} link={'https://twitter.com'}
                            />
                            <SocialMediaCard  
                                name='medium' icon={<FaMedium className="social-icon medium" />} link={'https://twitter.com'}
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


export default Home;