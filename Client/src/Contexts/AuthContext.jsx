import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'

const AuthContext = React.createContext();

export const AuthProvider = props => {
    const [token, setToken] = useLocalStorageState('access_token', '')
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);

    const login = newToken => {
        setToken(newToken)
    }

    const logout = () => {
        setToken('')
    }

    return(
        <AuthContext.Provider value={{
            token, login, logout,
            user, setUser, 
            isAuthenticated, setIsAuthenticated
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;