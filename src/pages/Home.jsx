import React from 'react'

//---------------- COMPONENTS ----------------
import Main from "../components/home/Main";
import AboutUs from "../components/home/AboutUs";
import Features from "../components/home/Features";
import ContactUs from "../components/home/ContactUs";
import Download from '../components/home/Download';
//--------------------------------------------


export default function Home() {
    return (
        <>
            <Main/>
            <AboutUs/>
            <Features/>
            <ContactUs/>
        </>
    )
}

