import React from "react";
import {NavLink} from "react-router-dom"
import Common from "./Common";
import ZOOM from "./Images/zoom.png";


const Home = () => { 

    return(
      <>
      <Common
       name="grow your business" 
      imgsrc={ZOOM} 
      visit="/service" 
      btname="get started"/>
  </>
    )
}
  export default Home