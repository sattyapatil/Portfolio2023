import React, {useEffect, useState} from "react";

import { HiArrowSmRight } from 'react-icons/hi'
// import './home.css'
import ProfilePictureCart from '../profile_picture_cart/ProfilePictureCart.jsx'
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"


function Home(props) {

    const [width, setWindowWidth] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
       
    function demoAsyncCall() {
      return new Promise((resolve) => setTimeout(() => resolve(), 20));
      }

    useEffect(() => { 

        updateDimensions();
   
        window.addEventListener("resize", updateDimensions);   
        
        demoAsyncCall().then(() => setIsLoading(false));

        return () => window.removeEventListener("resize",updateDimensions); }, 
        
        [width]
        
        )    
          
    const updateDimensions = () => {
         const width = window.innerWidth
         console.log(width)
         setWindowWidth(width)

         // Importing files depending on width of screen
        if (width<1024) import (`./homeMobile.css`);
        if (width>1024) import (`./home.css`);
       }


    return (
        isLoading ? <h1>Loading....</h1>:
        <div className='App-home'>
            <div className='Container-profile-picture-cart'>
                <ProfilePictureCart />
             </div>
            <ProfilePictureCart />
            <div className='Container-info'>
                <div className='title-text-container'>
                    <text className='title-text'>SATISH BADRINATH POPHALE</text>
                    
                </div>

                <text className='sub-text-container' style={{fontSize:'20px', fontWeight:'bold', fontFamily:"Times New Roman"}}>FULL-STACK DEVELOPER</text>

                <div className='sub-text-container'>
                    <text className='sub-text'>I'm software developer with 3+ years of experience. My most of the experience in app developer.</text>
                </div>

                <div className='about-me-button'>
                    <div className='about-me-button-text-container'>
                        <text>About me</text>
                    </div>
                     <div className='about-me-button-icon-container'>
                        <HiArrowSmRight />
                    </div>
                </div>
                
            </div>
            
            <SideBar />
            <ThemeIcon {...props} />
            
        </div>
    )
};


export default Home;