import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Contacts from '../Pages/contacts';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="skills" element={<Skills/>}></Route>
            <Route path="contacts" element={<Contacts/>}></Route>
        </Routes>
    );
}

export default AllRoutes;
