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
import GitCalender from './Routes/GitCalender'

function App() {
  return (
         
      <div>
        <Navbar/>
        {/* <HeroImage/> */}
        <Home/>
        <About/>
        <Skills/>
        <GitCalender/>
        <Project/>
        <Contact/>
      </div>
      //  <Routes>
      //   <Route path='/' element={<Home/>}></Route>
      //   <Route path="/about" element={<About/>}></Route>
      //   <Route path='/projects' element={<Project/>}></Route>
      //   <Route path='contact' element={<Contact/>}></Route>
      // </Routes>
  
  );
}

export default App;
