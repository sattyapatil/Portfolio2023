import React, {useEffect, useState} from "react";
import './home.css'
import ProfilePictureCart from '../profile_picture_cart/ProfilePictureCart.jsx'
import SideBar from "../sidebar/sideBar";


function Home(props) {


    return (
        <div className='App-home'>
            <div className='Container-profile-picture-cart'>
                
            </div>
            <ProfilePictureCart />
            <div className='Container-info'>
                <h1>Satish Badrinath Pophale</h1>
                
            </div>
            
            <SideBar />
            
        </div>
        
    )
};


export default Home;