import React, { useState } from 'react';
import Project1 from './Project1/Project1';
import Project2 from './Project2/Project2';
import Project3 from './Project3/Project3';
import Project4 from './Project4/Project4';
import Project5 from './Project5/Project5';
import "./Project.css"

const Project = () => {

      const [show ,setShow] = useState(false);
    return (
        <div id='projects' >
            <h1 className='main-heading'>Projects</h1>
                <Project1/>
                <br />
                <Project2/>
                <br />
                <Project3/>
                <br />
                <div className={show === true ? 'showProjects' : "hideProjects"}>
                <Project4/>
                <br />
                <Project5/>
            </div>
             <p className='show-button' onClick={()=>setShow(!show)}>{show ? 'Show Less' : "Show More"}</p>
             
        </div>
    );
}

export default Project;
