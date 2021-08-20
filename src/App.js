import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

//---------------- BOOTSTRAP ----------------

// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
//--------------------------------------------

import Styles from './App.css'

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
    <Route path={'/'} component={Home}/>
   </>
  );
}

export default App;
