import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import HeroImage from './Components/HeroImage';
import Skills from './Routes/Skills';
import { useState } from 'react';
import GitCalender from './Routes/GitCalender'

function App() {

  return (
         
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <GitCalender/>
        <Project/>
        <Contact/>
      </div>
    
  );
  
}

export default App;
