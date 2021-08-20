import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css'

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
