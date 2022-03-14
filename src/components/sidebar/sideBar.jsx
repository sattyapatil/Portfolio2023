import Reac, {useEffect, useState} from "react";
import { IoHome } from 'react-icons/io5';
import {MdOutlineSummarize} from 'react-icons/md';
import {MdWork, MdContacts} from 'react-icons/md'
import {ImBlogger} from 'react-icons/im'
// import './sideBar.css'


function SideBar(props) {

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
        if (width<1024) import (`./sideBarMobile.css`);
        if (width>1024) import (`./sideBar.css`);
       }

    // if (width>1024) {
    //     import './sideBarMobile.css'
    // } 

    
    let iconStyles = { fontSize: "1.5em" };
    return (
        <div class='side-bar'>
            <div className='side-bar-elements'>
                <div className='selected-side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>Home</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <IoHome style={iconStyles} />
                    </span>
                    
                </div>
                <div className='side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>About</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <MdOutlineSummarize style={iconStyles} />
                    </span>
                </div>
                <div className='side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>Experience</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <MdWork style={iconStyles} />
                    </span>
                </div>
                <div className='side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>Contact</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <MdContacts style={iconStyles} />
                    </span>
                </div>
                <div className='side-bar-element'>
                    <span className='side-bar-element-text'>
                        <h2>Blogs</h2>
                    </span>
                    <span className='side-bar-element-icon'>
                        <ImBlogger style={iconStyles} />
                    </span>
                </div>
                
            </div>
        </div>
    )
};


export default SideBar;