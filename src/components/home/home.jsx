import React, {useEffect, useState} from "react";
// import './home.css'
import ProfilePictureCart from '../profile_picture_cart/ProfilePictureCart.jsx'
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"


function Home(props) {

    const [width, setWindowWidth] = useState(0)   

    useEffect(() => { 

        updateDimensions();
   
        window.addEventListener("resize", updateDimensions);     

        return () => window.removeEventListener("resize",updateDimensions);    }, 
        
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
        <div className='App-home'>
            <div className='Container-profile-picture-cart'>
                <ProfilePictureCart />
             </div>
            <ProfilePictureCart />
            <div className='Container-info'>
                <div className='title-text-container'>
                    <text className='title-text'>Satish Badrinath Pophale</text>
                </div>

                <div className='sub-text-container'>
                    <text className='sub-text'>I'm software developer with 3+ years of experience. My most of the experience in app developer.</text>
                </div>
                
            </div>
            
            <SideBar />
            <ThemeIcon />
            
        </div>
        
    )
};


export default Home;