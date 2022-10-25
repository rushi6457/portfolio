
import myimage from "../assets/myimage.jpg";
import newpic from "../assets/newpic.png";
import React from 'react';
import "../Styles/About.css"
const About = () => {
    return (
       <div className='about-section' id='about'>
            <div className='text-about'>
                <h1 className='aboutHeading'>About Me</h1>
                <p>Hey I'm Rushikesh Patil Full-Stack Web Developer</p>
                <br />
                <p>A passionate web developer with strong technical as well as commuication skills, detail and goal oriented who is able to write efficient and clean code using MERN stack. In past few months I have worked on JavaScript and it's framework like Node JS also I have used front-end libraries like React-Js in this duration</p>
            </div>
        <div>
        <img src={newpic} className='profileImage'/>
        </div>
       </div>
    );
}

export default About;
