
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import { Flex } from "@chakra-ui/react"

const Skills = () => {
    return (
        <Flex 
   
        flexDirection={'column'}  justifyContent={'center'} alignItems='center' className={styles.SkillsSection}>
           
              <h2 className={styles.skillsHeading}>FRONT-END SKILLS</h2>
            <div className={styles.frontEndSection}>
                         <Swiper
                                className={styles.swiper}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                // className="mySwiper"
                            >
                            <SwiperSlide ><img className={styles.frontEndSkills} src={html}/></SwiperSlide>
                            <SwiperSlide><img className={styles.frontEndSkills} src={css} alt="" /></SwiperSlide>
                       
                        </Swiper>

                         <Swiper
                                className={styles.swiper}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                // className="mySwiper"
                            >
                                 <SwiperSlide><img className={styles.frontEndSkills} src={js} alt="" /></SwiperSlide>  
                                <SwiperSlide ><img className={styles.frontEndSkills} src={react}/></SwiperSlide>
                    
                         </Swiper>

                             <Swiper
                                className={styles.swiper}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                // className="mySwiper"
                            >
                                  <SwiperSlide><img className={styles.frontEndSkills} src={bootstrap} alt="" /></SwiperSlide>
                                <SwiperSlide><img className={styles.frontEndSkills} src={chakra} alt="" /></SwiperSlide>
                              
                         </Swiper>
                        </div>

                {/* <div>
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
                </div> */}
                <h2 className={styles.skillsHeading}>BACK-END SKILLS</h2>
            <div className={styles.backEndSection}>

                        <Swiper
                                className={styles.swiper}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                // className="mySwiper"
                            >
                            <SwiperSlide ><img className={styles.backendSkills} src={node}/></SwiperSlide>
                            <SwiperSlide><img className={styles.backendSkills} src={express} alt="" /></SwiperSlide>
                       
                        </Swiper>

                         <Swiper
                                className={styles.swiper}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                // className="mySwiper"
                            >
                                 <SwiperSlide><img className={styles.backendSkills} src={mongo} alt="" /></SwiperSlide>  
                                <SwiperSlide ><img className={styles.backendSkills} src={json}/></SwiperSlide>
                    
                         </Swiper>

                             <Swiper
                                className={styles.swiper}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                // className="mySwiper"
                            >
                                  <SwiperSlide><img className={styles.backendSkills} src={postman} alt="" /></SwiperSlide>
                                {/* <SwiperSlide><img className={styles.backendSkills} src={chakra} alt="" /></SwiperSlide> */}
                              
                         </Swiper>

                {/* <div>
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
                </div> */}
            </div>
         
        
         
        </Flex>
    );
}

export default Skills;
