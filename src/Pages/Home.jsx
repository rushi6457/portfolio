import {Text, Box, Center, Divider, Flex, Heading } from '@chakra-ui/react';
import { logDOM } from '@testing-library/react';
import React from 'react';
import "./home.css"
const Home = () => {

      const basicBoxStyles = {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    border:'1px solid',
    backgroundSize:'lg',
    marginTop: '100px',
    innerHeight:"500px",
    textAlign: 'center',
     boxSize: '100%',
     innerHeight:"1000px",
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background:
      'url(https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80) center/cover no-repeat',
  }
    return (

    <div border='1px solid' innerHeight='500px' width='80%'marginTop='200px'>
     
     </div>
    );
}

export default Home;
