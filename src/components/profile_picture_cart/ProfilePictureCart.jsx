import React, {useEffect, useState} from "react";
import './ProfilePictureCart.css'
import profPicture from './satish02.png'


function ProfilePictureCart(props) {

    const [width, setWindowWidth] = useState(0)   

    // useEffect(() => { 

    //     updateDimensions();
   
    //     window.addEventListener("resize", updateDimensions);     

    //     return () => window.removeEventListener("resize",updateDimensions);    }, 
        
    //     [width]
        
    //     )    
          
    // const updateDimensions = () => {
    //      const width = window.innerWidth
    //      console.log(width)
    //      setWindowWidth(width)

    //      // Importing files depending on width of screen
    //     if (width<1024) import (`./profilePictureCartMobile.css`);
    //     if (width>1024) import (`./ProfilePictureCart.css`);
    //    }

    
    return (
        <div className='profile-picture-cart'>
            <div className='skill-card-img-overlay'></div>
            <img src={profPicture} alt="it's me"/> 
        </div>
    )
    
};

export default ProfilePictureCart;