import React from 'react';
import gearbest from "../assets/gearbest-img.png"
import firstpost from "../assets/firstpost-img.png";
import naturebasket from "../assets/naturebasket-img.png"
import "../Styles/Project.css"
import {AiOutlineTags} from "react-icons/ai"
import {Button} from "@chakra-ui/react"
const Project = () => {
    return (
        <div id='projects'>
            <h1 className='project-main-heading'>My Projects</h1>
            <div className='project-section'>
                <div className='gear-best'>
                    <div className='project-img'>
                        <img className='project-screenshot' src={gearbest} alt="gear-best" />
                    </div>
                    <div className='gearbest-info'>
                        <h1>Gearbest.com </h1>
                        <p className='project-description'>Gearbest is the E-commerce website which has customer base in all over the world with wide range of products. </p>
                        <h4 className='tech-stack-head'>Tech Stack</h4>
                        <span className='tech-stack-span'>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           ReactJS</span>
                            <span> <AiOutlineTags fontSize={'25px'}/>
                           JavaScript</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           CSS</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           JSON-Server</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           Swiper</span>
                        </span>
                        <br />
                        <div className='demo-button'>
                      <a href="https://gearbest-project-eta.vercel.app/" target={'_blank'}><button className='live-demo-button'>LIVE DEMO</button></a> 
                       <a href="https://github.com/rushi6457/prime-move-3249/tree/main/gearbest.com" target={'_blank'}><button className='github-link-button'>GITHUB Link</button></a>
                       </div>
                    </div>
                </div>
                <div className='first-post'>
                    <div className='project-img'>
                        <img className='project-screenshot' src={firstpost} alt="" />
                    </div>
                    <div className='firstpost-info'>
                        <div >
                        <h1>Firstpost.com </h1>
                        <p className='project-description'>First post is the well known online news website which has latest national and international news around different topics  </p>
                        <h4 className='tech-stack-head'>Tech Stack</h4>
                        <span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           JavaScript</span>
                            <span> <AiOutlineTags fontSize={'25px'}/>
                           HTML</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           CSS</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           News API</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           Swiper</span>
                        </span>
                        <br />
                       <a href="https://heroic-cucurucho-c5bc21.netlify.app/" target={'_blank'}><button className='live-demo-button'>LIVE DEMO</button></a>
                       <a href="https://github.com/raje2/TheTeam_Monster_FirstPost" target={'_blank'}><button className='github-link-button'>GITHUB Link</button></a>
                        </div>
                    </div>
                </div>
                <div className='nature-basket'>
                    <div className='project-img'>
                        <img className='project-screenshot' src={naturebasket} alt="" />
                    </div>
                    <div>
                         <div className='naturebasket-info'>
                        <h1>Nature Basket.com </h1>
                        <p className='project-description'>Nature Basket is the online grocery E-commerce website with the customer base of all over the world</p>
                        <h4 className='tech-stack-head'>Tech Stack</h4>
                        <span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           ReactJS</span>
                            <span> <AiOutlineTags fontSize={'25px'}/>
                           JavaScript</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           CSS</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           JSON-Server</span>
                             <span> <AiOutlineTags fontSize={'25px'}/>
                           Swiper</span>
                        </span>
                        <br />
                       <a href="https://github.com/atalkrpandey/resolute-heat-3745/tree/main/Nature%20Basket" target={'_blank'}><button className='live-demo-button'>LIVE DEMO</button></a>
                       <a href="https://github.com/atalkrpandey/resolute-heat-3745/tree/main/Nature%20Basket" target={'_blank'}><button className='github-link-button'>GITHUB Link</button></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
