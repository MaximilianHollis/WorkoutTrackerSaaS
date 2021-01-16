import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'
import AuthService from '../Services/AuthService'

const AuthContext = React.createContext();

export const AuthProvider = props => {
    const [token, setToken] = useLocalStorageState('access_token', '')
    const [user, setUser] = useState(null);
/*     const [isAuthenticated, setIsAuthenticated] = useState(false);
 */    const [isLoaded, setIsLoaded] = useState(false);

/*     useEffect(()=>{
        AuthService.authenticate({username: '', plan: 'noob', token: 'urmom'}).then(data => console.log(data))
    },[]); */

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
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;