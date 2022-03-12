import React from "react";
import { IoHome } from 'react-icons/io5';
import {MdOutlineSummarize} from 'react-icons/md';
import {MdWork, MdContacts} from 'react-icons/md'
import {ImBlogger} from 'react-icons/im'
import {BsFillLightbulbFill} from 'react-icons/bs'
import './sideBar.css'


function SideBar(props) {

    
    let iconStyles = { fontSize: "1.5em" };
    return (
        <div class='side-bar'>
            <div className='side-bar-title'>
                <BsFillLightbulbFill style={{fontSize: "2em"}} onClick={()=> props.setThemeFunc(props.theme)}/>
            </div>
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