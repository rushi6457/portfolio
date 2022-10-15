import { StylesProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { createContext } from 'react';

export const ModeContext = createContext()


const DarkmodeContext = ({children}) => {

    const [dark,setDark] = useState(false)
    
   
    return (
        <ModeContext.Provider value={[dark,setDark]}>
            {children}
        </ModeContext.Provider>
    );
}

export default DarkmodeContext;
