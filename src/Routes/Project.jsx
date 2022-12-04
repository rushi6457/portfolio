import React from 'react';
import gearbest from "../assets/gearbest-img.png"
import firstpost from "../assets/firstpost-img.png";
import naturebasket from "../assets/naturebasket-img.png"
import "../Styles/Project.css"
import {AiOutlineTags} from "react-icons/ai"
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import js from "../assets/js.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import json from "../assets/json.png"
import swiper from "../assets/swiper.png"

const Project = () => {
    return (
        <div  id='projects'>
            <h1  className='project-main-heading'>My Projects</h1>
            <div className='project-section'>
                <div className='gear-best'>
                    <div className='project-img'>
                        <img className='project-screenshot' src={gearbest} alt="gear-best" />
                    </div>
                    <div className='gearbest-info'>
                        <h1>Gearbest.com </h1>
                        <p className='project-description'>Gearbest is the E-commerce website which has wide varities of products. </p>
                        <h4 className='tech-stack-head'>Tech Stack</h4>
                        {/* <Flex w={'100%'} justifyContent='center' gap={'10px'} >
                            <Box>
                                <Image w={'30px'} h='30px' src={react}/>
                                <Text>React JS</Text>
                            </Box>
                               <Box>
                                <Image w={'30px'} h='30px' src={js}/>
                                <Text>JavaScript</Text>
                            </Box>
                               <Box>
                                <Image w={'30px'} h='30px' src={json}/>
                                <Text>JSON-server</Text>
                            </Box>
                               <Box>
                                <Image w={'30px'} h='30px' src={css}/>
                                <Text>CSS</Text>
                            </Box>
                              <Box>
                                <Image w={'30px'} h='30px' src={swiper}/>
                                <Text>Swiper</Text>
                            </Box>
                        </Flex> */}
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
                        <Flex 
                        marginTop={'50px'}
                        justifyContent='space-evenly'
                        className='demo-button'>
                      <a href="https://gearbest-project-eta.vercel.app/" target={'_blank'}><button className='live-demo-button'>LIVE DEMO</button></a> 
                       <a href="https://github.com/rushi6457/prime-move-3249/tree/main/gearbest.com" target={'_blank'}><button className='github-link-button'>GITHUB Link</button></a>
                       </Flex>
                    </div>
                </div>
                <div className='first-post'>
                    <div className='project-img-first-post'>
                        <img className='project-screenshot' src={firstpost} alt="" />
                    </div>
                    <div className='firstpost-info'>
                        <h1>Firstpost.com </h1>
                        <p className='project-description'>First post is the news website with latest news of different categories.    </p>
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
                          <Flex align={'center'} 
                            justifyContent='space-evenly'
                          marginTop='60px'
                          className='demo-button'>
                          <a href="https://heroic-cucurucho-c5bc21.netlify.app/" target={'_blank'}><button className='live-demo-button'>LIVE DEMO</button></a>
                          <a href="https://github.com/raje2/TheTeam_Monster_FirstPost" target={'_blank'}><button className='github-link-button'>GITHUB Link</button></a>
                        </Flex>
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
                         <Flex align={'center'} 
                           justifyContent='space-evenly'
                          marginTop='30px'
                          className='demo-button'>
                       <a href="https://github.com/atalkrpandey/resolute-heat-3745/tree/main/Nature%20Basket" target={'_blank'}><button className='live-demo-button'>LIVE DEMO</button></a>
                       <a href="https://github.com/atalkrpandey/resolute-heat-3745/tree/main/Nature%20Basket" target={'_blank'}><button className='github-link-button'>GITHUB Link</button></a>
                       </Flex>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
