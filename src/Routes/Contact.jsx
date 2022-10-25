import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Form, Spinner } from 'react-bootstrap';
import {SiLinkedin} from "react-icons/si"
import {VscGithub} from "react-icons/vsc"
import { Button } from 'react-bootstrap';
import styles from "../Styles/Contact.module.css"
const Contact = () => {
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
        
        <div id='contacts' className={styles.fullContacts}>
                <h1 className={styles.contactHeader}>Connect with Me</h1>
             <form className={styles.form} ref={form} onSubmit={sendEmail}>
                  
                    <input className={styles.name}  
                    type="text" name="user_name"  
                      onChange={({target})=>setName(target.value)} 
                    placeholder='Enter Name' />
                    <br/>
               
                    <input className={styles.email} 
                    type="email" name="user_email" 
                      onChange={({target})=>setEmail(target.value)} 
                    placeholder='Enter Email' />
                    <br/>
                
                    <textarea name="message" 
                    className={styles.message }
                       onChange={({target})=>setMessage(target.value)} 
                    placeholder='Enter Message'  />
                    <br />
                    <input onClick={onsubmit}    
                    className={styles.send} type="submit" value="Send" />
    </form>
                <p className={styles.socialMediaheading}>Social Network</p>
                <span className={styles.socialIcons}>
                    <a href="https://github.com/rushi6457" target={'_blank'}><VscGithub/></a>
                <a href='https://www.linkedin.com/in/rushikesh-patil-4a66b8236' target={'_blank'}><SiLinkedin/></a>
                </span>
        </div>
    );
}

export default Contact;
