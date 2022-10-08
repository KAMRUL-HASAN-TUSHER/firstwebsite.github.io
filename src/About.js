import React from "react";
import Common from "./Common";
import DESK from "./Images/desk.jpg";



const About = () => {




    return(
      <>
      <Common
        name="welcome to About page" 
      imgsrc={DESK} 
      visit="/contact" 
      btname="contact me"
       />
      </>
    )
   };
  
  export default About;