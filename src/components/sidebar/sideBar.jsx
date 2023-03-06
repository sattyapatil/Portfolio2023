import React, {useEffect, useState} from "react";
import {
    useNavigate,
    useLocation
  } from "react-router-dom";
import { IoHome } from 'react-icons/io5';
import {MdOutlineSummarize} from 'react-icons/md';
import {MdWork, MdContacts} from 'react-icons/md';
import {ImBlogger} from 'react-icons/im';
import {BsPersonBadge} from 'react-icons/bs';
import './sideBar.css'


function SideBar(props) {

    const navigate = useNavigate();

    const [width, setWindowWidth] = useState(0)  

    let location = useLocation(); 

    // useEffect(() => { 

    //     // updateDimensions();
   
    //     window.addEventListener("resize", updateDimensions);     

    //     return () => window.removeEventListener("resize",updateDimensions);    }, 
        
    //     [width]
        
    //     )    
          
    // const updateDimensions = () => {
    //      const width = window.innerWidth
    //      console.log(width)
    //      setWindowWidth(width)

    //      // Importing files depending on width of screen
    //     if (width<1024) import (`./sideBarMobile.css`);
    //     if (width>1024) import (`./sideBar.css`);
    //    }

    // if (width>1024) {
    //     import './sideBarMobile.css'
    // } 

    
    let iconStyles = { fontSize: "1.5em" };
    return (
        <div class='side-bar'>
            <div className='side-bar-elements'>
                <div className={location.pathname==='/' ? 'selected-side-bar-element' : 'side-bar-element'}>
                    <span className='side-bar-element-text'>
                        <h2>Home</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <IoHome style={iconStyles} onClick={() => navigate('/')} />
                    </span>
                    
                </div>
                <div className={location.pathname==='/about' ? 'selected-side-bar-element' : 'side-bar-element'}>
                    <span className='side-bar-element-text'>
                        <h2>About</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <BsPersonBadge style={iconStyles} onClick={() => navigate('/about')} />
                    </span>
                </div>
                <div className='side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>Portfolio</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <MdWork style={iconStyles} onClick={() => navigate('/portfolio')} />
                    </span>
                </div>
                <div className='side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>Contact</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <MdContacts style={iconStyles} onClick={() => navigate('/contact')} />
                    </span>
                </div>
                <div className='side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>Blogs</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <ImBlogger style={iconStyles} onClick={() => navigate('/blogs')} />
                    </span>
                </div>
                
            </div>
        </div>
    )
};


export default SideBar;