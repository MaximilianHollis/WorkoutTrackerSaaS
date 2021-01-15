import React, { useState, useContext, useEffect } from 'react'
import Input from '../Input'
import WorkingOut from '../../../public/images/authentication-working-out-undraw.svg'
import AuthService from '../../Services/AuthService';

import {
    AuthWrapper,
    AuthCard,
    AuthBackground,
    AuthButton

} from './Authentication.elements'



export default function Authentication() {
    const [credentials, setCredentials] = useState({ username: '', email: '', password: '', confirmPassword: '' })
    const mode = 'register';

    //  AuthService.register({username: 'a', password: 'a', plan: 'free'}).then(data => {

    const handleClick = (e, data, mode) => {
        e.preventDefault();
        if (data.password === data.confirmPassword){
            if(!data.email.match(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)){
                return console.log('email not valid')
            }
            if (mode === 'register'){
                AuthService.register({ username: data.username, password: data.password, email: data.email, plan: 'free' }).then(data => console.log(data))
            }
            if (mode === 'signin'){
                AuthService.login({ username: data.username, password: data.password})
            }
        } else {
            console.log('not matching')
        }
    }

    return <AuthWrapper>
        <AuthCard>
            <form>
                <Input
                    type="text"
                    label="enter username"
                    value={credentials.username}
                    onChange={val => setCredentials(prevState => { return { ...prevState, username: val } })}
                />
                <Input
                    type="text"
                    label="enter email"
                    value={credentials.email}
                    onChange={val => setCredentials(prevState => { return { ...prevState, email: val } })}
                />
                <Input
                    type="password"
                    autoComplete="new-password"
                    label="enter password"
                    value={credentials.password}
                    onChange={val => setCredentials(prevState => { return { ...prevState, password: val } })}
                />
                <Input
                    type="password"
                    autoComplete="new-password"
                    label="confirm password"
                    value={credentials.confirmPassword}
                    onChange={val => setCredentials(prevState => { return { ...prevState, confirmPassword: val } })}
                />
                <AuthButton onClick={(e) => handleClick(e, credentials, mode)}>Submit</AuthButton>
            </form>
        </AuthCard>
        <AuthBackground backgroundImg={WorkingOut} />
    </AuthWrapper>
}

