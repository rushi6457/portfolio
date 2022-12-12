import { Flex } from "@chakra-ui/react";
import {ImMobile2} from "react-icons/im";
import {VscGithub} from "react-icons/vsc";
import {SiLinkedin} from "react-icons/si";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {TfiEmail} from "react-icons/tfi";
import "../Styles/Contacts1.css"
const Contacts1 = () =>{

       const [show,setShow] = useState(true)
    const [auth,setAuth] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState('')

    const form = useRef();
      const sendEmail = (e) => {
        setLoading(true)
    e.preventDefault();

    emailjs.sendForm('service_hx4boim', 'template_mxsh6ri', form.current, 'zYKXfdbRCb8WRJeN0')
      .then((result) => {
          console.log(result.text);
          setLoading(false)
        return  alert("Message send successfully")
        
      }, (error) => {
          console.log(error.text);
        return  alert("Something went wrong")
      });
  };


  const onsubmit = (e) =>{
    e.preventDefault()
    if(name !== '' && email !== '' && message !== '' ){
        return alert("Message send successfully")
    }
  }


    return (
        <div id="contacts" data-aos="fade-up">
        <h1 className="contacts-heading">Contacts</h1>
        <div className="contacts-main" >
            <div className="form">
                <form action="" className="form-inner">
                    <input 
                    name="user_name"  
                    onChange={({target})=>setName(target.value)} 
                    placeholder="Enter Email" 
                    className="input" 
                     type="text" />
                    <br />
                    <input 
                    placeholder="Enter Password"  
                    className="input" 
                    type="text" />
                    <br />
                    <textarea placeholder="Enter Message" className="text-area" name="text area" id="" cols="20" rows="5"></textarea>
                    <button className="input-button"  type="submit">Submit</button>
                </form>
                    
            </div>
            <div className="icons-div">
                <h2>Follow & connect with me</h2>
                <div className="social-contacts">
                    <Flex className="icons-details"><ImMobile2 className="social-icons"/><a>+91&nbsp;&nbsp;7709499930</a></Flex>

                    <Flex className="icons-details"><VscGithub className="social-icons"/><a href="https://github.com/rushi6457" target={'_blank'}>Github profile</a></Flex>

                    <Flex className="icons-details"><SiLinkedin className="social-icons"/><a href='https://www.linkedin.com/in/rushikesh-patil-4a66b8236' target={'_blank'}>Linkedin profile</a></Flex>

                    <Flex className="icons-details"><TfiEmail className="social-icons"/><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">rushiypatil@gmail.com</a></Flex>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Contacts1;