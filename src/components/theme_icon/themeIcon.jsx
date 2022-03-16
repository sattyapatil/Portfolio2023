import React, {useEffect} from "react";
import './themeIcon.css'
import {BsFillLightbulbFill} from 'react-icons/bs'



function ThemeIcon(props) {

    
    useEffect(() => {
  
        //get all properties as per user preference
        let backgroundColor;
        let themeColor1;
        let themeColor2;
        let themeColor3;
        let textColot1;
        let iconBackgroundColor1;
        let sideBarBackgroundColor1;
  
        if (props.theme==='light') {
          backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-light');
          themeColor1 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-light1');
          themeColor2 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-light2');
          themeColor3 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-light3');
          textColot1 = getComputedStyle(document.documentElement).getPropertyValue('--text-color-light1');
          iconBackgroundColor1 = getComputedStyle(document.documentElement).getPropertyValue('--icon-backgound-color-light1');
          sideBarBackgroundColor1 = getComputedStyle(document.documentElement).getPropertyValue('--side-bar-background-color-light1')
  
        }else{
          backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-dark');
          themeColor1 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-dark1');
          themeColor2 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-dark2');
          themeColor3 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-dark3');
          textColot1 = getComputedStyle(document.documentElement).getPropertyValue('--text-color-dark1');
          iconBackgroundColor1 = getComputedStyle(document.documentElement).getPropertyValue('--icon-backgound-color-dark1');
          sideBarBackgroundColor1 = getComputedStyle(document.documentElement).getPropertyValue('--side-bar-background-color-dark1')
  
        }
  
  
        //set all properties as per user preference
        document.documentElement.style.setProperty('--background-color', backgroundColor);
        document.documentElement.style.setProperty('--theme-color1', themeColor1);
        document.documentElement.style.setProperty('--theme-color2', themeColor2);
        document.documentElement.style.setProperty('--theme-color3', themeColor3);
        document.documentElement.style.setProperty('--text-color1', textColot1);
        document.documentElement.style.setProperty('--icon-backgound-color1', iconBackgroundColor1);
        document.documentElement.style.setProperty('--side-bar-background-color', sideBarBackgroundColor1);
       
  
        }, [props.theme])
  
    // function setColor (){
    //     //set all properties as per user preference
    //     document.documentElement.style.setProperty('--background-color', backgroundColor);
    // }
  
    function setThemeFunc (theme) {
      if (theme==='light') {
        props.setTheme('dark')
      }else {
        props.setTheme('light')
      }
      // window.location.reload(false);
  
    }

    return (
        <div className='theme-icon-container'>
            <BsFillLightbulbFill style={{fontSize: "2em"}} onClick={()=> setThemeFunc(props.theme)}/>
        </div>
    )
};

export default ThemeIcon;