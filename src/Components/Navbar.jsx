import React, { useState } from 'react';
//  import { Link } from 'react-router-dom';
import { Link } from "react-scroll";
import styles from "./Navbar.module.css"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import {AiOutlineDownload ,AiOutlineHome,AiOutlineFolderOpen} from "react-icons/ai"
import About from '../Routes/About';
import {GrContact} from "react-icons/gr"
import {BsPersonCheck} from "react-icons/bs"
import {RiContactsBookLine} from "react-icons/ri"
import "./Navbar.css"
const Navbar = () => {
    
    const [click , setClick ] = useState(false)
    const [color , setColor] = useState(false)
    const handleClick = () =>setClick(!click)
    
    const changeColor = () =>{
        if(window.scrollY >= 50){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll" , changeColor)

    return (
        <div className={styles.header}>
            <div><Link to="/"  className={styles.logo}><h1><span>R</span>USHIKESH</h1></Link></div>
            <ul className={click ? "nav-menu active"  : "nav-menu"}>
                <li> 
                    {/* <Link to="/" >Home</Link> */}
                        <Link activeClass={styles.active} to="home" spy={true} smooth={true} offset={100} duration={1000}><AiOutlineHome className={styles.navbarIcons}/>Home</Link>
                </li>
                  <li>
                    {/* <Link to="/about" >About</Link> */}
                 <Link activeClass={styles.active} to="about" spy={true} smooth={true} offset={50} duration={1000}><BsPersonCheck className={styles.navbarIcons}/>About</Link>
                </li>
                  <li>
                    {/* <Link to="/projects">Projects</Link> */}
                       <Link activeClass={styles.active} to="projects" spy={true} smooth={true} offset={50} duration={1000}><AiOutlineFolderOpen className={styles.navbarIcons}/>Projects</Link>
                </li>
                  <li>
                    {/* <Link to="/contacts">Contacts</Link> */}
                        <Link activeClass={styles.active} to="contacts" spy={true} smooth={true} offset={50} duration={1000}><RiContactsBookLine className={styles.navbarIcons}/>Contacts</Link>
                </li>
                  <li>
                    <a href='https://drive.google.com/file/d/1NArCjRTp9a0ZPFTInAh2qCXHWzCAYTYJ/view?usp=sharing'>
                        <button className={styles.resumeButton}><AiOutlineDownload fontSize={'20px'}/>Resume</button>
                    </a>
                </li>
            </ul>
            <div className={styles.hamberger} onClick={handleClick}>
                {!click ? (
                     <FaBars  size={25} style ={{color:'white'}} />
                ):(

                   <FaTimes  size={25} style ={{color:'white'}}  />
                )
            }
               
            </div>
        </div>
    );
}

export default Navbar;
