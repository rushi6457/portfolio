import React from 'react';
import html from "../assets/html.jpg"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import chakra from "../assets/chakra.jpg"
import bootstrap from "../assets/bootstrap.png"
import styles from "../Styles/Skills.module.css"
import node from "../assets/node.png"
import express from "../assets/express.png"
import mongo from "../assets/mongo.jpeg"
import json from "../assets/json.png"
import postman from "../assets/postman.png"
import GitCalender from './GitCalender';
const Skills = () => {
    return (
        <div>
           
              <h2 className={styles.skillsHeading}>FRONT-END SKILLS</h2>
            <div className={styles.frontEndSection}>
                {/* <div>
                <h2 className={styles.skillsHeading}>FRONT-END SKILLS</h2>
                </div> */}
                {/* <h3 className={styles.skillsHeading}>FRONT-END SKILLS</h3> */}
                <div>
                    <img className={styles.frontEndSkills} src={html} alt="" />
                </div>
                <div>
                    <img className={styles.frontEndSkills} src={css} alt="" />
                </div>
                <div>
                    <img className={styles.frontEndSkills} src={js} alt="" />
                </div>
                <div>
                    <img className={styles.frontEndSkills} src={react} alt="" />
                </div>
                <div>
                    <img className={styles.frontEndSkills} src={chakra} alt="" />
                </div>
                <div>
                    <img className={styles.frontEndSkills} src={bootstrap} alt="" />
                </div>
            </div>
                <h2 className={styles.skillsHeadingBack}>BACK-END SKILLS</h2>
            <div className={styles.backEndSection}>
                <div>
                    <img className={styles.backendSkills} src={node} alt="" />
                </div>
                <div>
                    <img className={styles.backendSkills} src={express} alt="" />
                </div>
                <div>
                    <img className={styles.backendSkills} src={mongo} alt="" />
                </div>
                <div>
                    <img className={styles.backendSkills} src={json} alt="" />
                </div>
                <div>
                    <img className={styles.backendSkills} src={postman} alt="" />
                </div>
            </div>
         
        
         
        </div>
    );
}

export default Skills;
