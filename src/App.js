/*import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime,setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString(); 
    setCtime(newCTime);
  };

  return (
<>
  <h1>{ctime}</h1>
  <button onClick={UpdateTime}>get time</button>
</>
  );
}

export default App;*/

import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {




  return(
    <>
<Navbar/>

    <Routes>

<Route exact path="/" element={<Home />} end >Home</Route>
<Route exact path="/about" element={<About />}>About</Route>
<Route exact path="/service" element={<Service />}>Service</Route>
<Route exact path="/contact" element={<Contact/>}>Contact</Route>

<Route exact path="*" element={<Home />}>Hom</Route>

    </Routes>
    <Footer/>
    </>
  )
 };

export default App;