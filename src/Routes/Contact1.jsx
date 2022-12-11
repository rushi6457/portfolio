import { Flex } from "@chakra-ui/react";
import {ImMobile2} from "react-icons/im";
import {VscGithub} from "react-icons/vsc";
import {SiLinkedin} from "react-icons/si";
import "../Styles/Contacts1.css"
const Contacts1 = () =>{

    return (
        <>
        <h1 className="contacts-heading">Contacts</h1>
        <div className="contacts-main">
            <div className="form">
                <form action="" className="form-inner">
                    <input placeholder="Enter Email" className="input"  type="text" />
                    <br />
                    <input placeholder="Enter Password"  className="input" type="text" />
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
                </div>
            </div>
        </div>
        </>
    )
}
export default Contacts1;