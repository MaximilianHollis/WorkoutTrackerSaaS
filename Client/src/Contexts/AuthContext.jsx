import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state'

const AuthContext = React.createContext();

export const AuthProvider = props => {
    const [token, setToken] = useLocalStorageState('access_token', '')

    const login = newToken => {
        setToken(newToken)
    }

    const logout = () => {
        setToken('')
    }

    return(
        <AuthContext.Provider value={{
            token, login, logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;