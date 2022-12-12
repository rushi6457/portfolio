
import myimage from "../assets/myimage.jpg";
import newpic from "../assets/newpic.png";
import React from 'react';
import pic2 from "../assets/pic2.png";

import "../Styles/About.css"
const About = () => {
    return (
       <div 
       data-aos="fade-up"
       className='about-section' id='about'>
            <div className='text-about'>
                <h1 className='aboutHeading'>About Me</h1>
                <p>Hey, I'm Rushikesh Patil Full-Stack Web Developer</p>
                <br />
                <p>A passionate Full-stack web developer with strong technical as well as commuication skills, goal oriented programmer who is able to write an efficient and clean code using MERN stack. In past few months I have worked on JavaScript,Typescript,Redux and frameworks like Node JS. I have used front-end libraries like React-Js also I have worked on backend technologies such as MongoDb, express JS in this duration. Apart from that I'm a B-tech graduate in Mechanical from D.Y.Patil Institute of Engineering, Pune </p>
            </div>
            <div>
                <img src={pic2} className='profileImage'/>
            </div>
       </div>
    );
}

export default About;
