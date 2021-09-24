import React, { useState } from 'react';

const LoginContext = React.createContext({loginValue:false,userValue:""});

function LoginContextProvider(props){
    const [loginValue, setLoginValue] = useState(false);
    const [userValue, setUserValue] = useState("");


    const { children } = props;
    
    const setLogin = (value) => {
        setLoginValue(value);
    } 

    const setUser = (value) => {
        setUserValue(value);
    }

    return (
        <LoginContext.Provider value={{loginValue, setLogin,userValue ,setUser}}>
            { children }
        </LoginContext.Provider>
    )
}

export default LoginContext;
export { LoginContextProvider }
