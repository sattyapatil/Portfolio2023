import React from "react";
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"



function About(props) {

    return (
        <div>
            <h1>About</h1>
            <SideBar />
            <ThemeIcon {...props} />
        </div>
    )
};

export default About;