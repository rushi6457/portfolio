import React from 'react';
// import { Link, Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import GithubStats from '../Components/GithubStats';
import HeroImage from '../Components/HeroImage';
import Navbar from '../Components/Navbar';
import About from './About';
import styles from "../Styles/Home.module.css"
import asset2 from "../assets/asset2.jpg"
const Home = () => {
    return (
        // <div>
        <>
         <div className={styles.mask}>
                <img className={styles.intoImg} src={asset2} alt=''/>
        </div>
        <div id='home' className={styles.hero}>
        
        <div className={styles.content}>
            <p className={styles.helloText}>Hello,my name is</p>
            {/* <Divider orientation='horizontal' color='white' variant={'1px solid white'} /> */}
            <h3 className={styles.nameheading}>Rushikesh Patil </h3>
 
         <p className={styles.designationText}>FULL STACK WEB DEVELOPER</p>

            <div className="buttons">
               <Link className={styles.btn} to='projects'spy={true} smooth={true} offset={100} duration={1000}>
                <button>Projects</button>
               </Link>
               <Link className={styles.btnLight} to='contacts'spy={true} smooth={true} offset={100} duration={1000}>
                <button>Contact</button>
               </Link>
                {/* <Link to='/projects'  className={styles.btn}>Projects</Link>
                  <Link to='/conatct' className={styles.btnLight}>Contacts</Link> */}
            </div>
             
        </div>
        </div>
        </>
    );
}

export default Home;
