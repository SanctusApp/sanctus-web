import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Styles from './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

//---------------- BOOTSTRAP ----------------
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
//--------------------------------------------

//---------------- COMPONENTS ----------------
import NavMenu from './pages/NavMenu'
import Home from './pages/Home'
//--------------------------------------------



function App() {

  useEffect(() => {
    AOS.init({duration: 1000, once: "false"});
}, [])

  return (
   <>
    <NavMenu/>
    <Home/>
   </>
  );
}

export default App;
