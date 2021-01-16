import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'
import AuthService from '../Services/AuthService'

const AuthContext = React.createContext();

export const AuthProvider = props => {
    const [token, setToken] = useLocalStorageState('access_token', '')
    const [user, setUser] = useLocalStorageState('user', {username: '', plan: '', token: ''});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        AuthService.authenticate(user).then(data => console.log(data))
    },[]);

    const login = data => {
        setUser(data)
    }

    const logout = () => {
        setToken('')
    }

    return(
        <AuthContext.Provider value={{
            user, login, logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;