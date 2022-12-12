import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import HeroImage from './Components/HeroImage';
import Skills from './Routes/Skills';
import { useState } from 'react';
import GitCalender from './Routes/GitCalender'
import Project1 from './Routes/Projects1';
import Contacts1 from './Routes/Contact1';
import Project from './Routes/Projects/Project';

function App() {

  return (
         
      <div className='app'>
        <Navbar/>
         <Home/>
        <About/>
        <Skills/>
        <GitCalender/>
        <Project/>
        {/* <Project1/> */}
        <Contacts1/>
         {/* <Project/>  */}
       {/* <Contact/>  */}
      </div>
    
  );
  
}

export default App;
