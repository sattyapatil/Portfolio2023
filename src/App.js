import React, {useEffect, useState} from 'react';
import {BsFillLightbulbFill} from 'react-icons/bs'
import './App.css';
import Home from './components/home/home'

function App() {


  const [theme, setTheme] = useState('light');
    
  useEffect(() => {

      //get all properties as per user preference
      let backgroundColor;
      let themeColor1;
      let themeColor2;
      let themeColor3;
      let textColot1;
      let iconBackgroundColor1;

      if (theme==='light') {
        backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-light');
        themeColor1 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-light1');
        themeColor2 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-light2');
        themeColor3 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-light3');
        textColot1 = getComputedStyle(document.documentElement).getPropertyValue('--text-color-light1');
        iconBackgroundColor1 = getComputedStyle(document.documentElement).getPropertyValue('--icon-backgound-color-light1');
        
      }else{
        backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-dark');
        themeColor1 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-dark1');
        themeColor2 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-dark2');
        themeColor3 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-dark3');
        textColot1 = getComputedStyle(document.documentElement).getPropertyValue('--text-color-dark1');
        iconBackgroundColor1 = getComputedStyle(document.documentElement).getPropertyValue('--icon-backgound-color-dark1');
      }


      //set all properties as per user preference
      document.documentElement.style.setProperty('--background-color', backgroundColor);
      document.documentElement.style.setProperty('--theme-color1', themeColor1);
      document.documentElement.style.setProperty('--theme-color2', themeColor2);
      document.documentElement.style.setProperty('--theme-color3', themeColor3);
      document.documentElement.style.setProperty('--text-color1', textColot1);
      document.documentElement.style.setProperty('--icon-backgound-color1', iconBackgroundColor1);
     

      }, [theme])

  // function setColor (){
  //     //set all properties as per user preference
  //     document.documentElement.style.setProperty('--background-color', backgroundColor);
  // }

  function setThemeFunc (theme) {
    if (theme==='light') {
      setTheme('dark')
    }else {
      setTheme('light')
    }
    // window.location.reload(false);

  }

  return (
    <React.Fragment>
      <div className="App">
        <div className='theme-icon-container'>
            <BsFillLightbulbFill style={{fontSize: "2em"}} onClick={()=> setThemeFunc(theme)}/>
        </div>
        <Home />
      </div>
    </React.Fragment>
    
  );
}

export default App;
