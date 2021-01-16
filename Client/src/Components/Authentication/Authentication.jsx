import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Input from '../Input'
import WorkingOut from '../../../public/images/authentication-working-out-undraw.svg'
import AuthService from '../../Services/AuthService';

import {
    AuthWrapper,
    AuthCard,
    AuthBackground,
    AuthButton,
    AuthTitle,
    AuthSubtitle
} from './Authentication.elements'



export default function Authentication({ mode }) {
    //router
    const router = useRouter()
    const [credentials, setCredentials] = useState({ username: '', email: '', password: '', confirmPassword: '' })
    //  AuthService.register({username: 'a', password: 'a', plan: 'free'}).then(data => {

    const handleClick = (data, mode) => {
        if (mode === 'register') {
            if (data.password === data.confirmPassword) {
                if (data.email.match(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)) {
                    AuthService.register({ username: data.username, password: data.password, email: data.email, plan: 'free' }).then(data => {
                        data.success ? router.push('/pricing') : null
                    })
                } else {
                    console.log('email is invalid')
                }
            } else {
                console.log('password does not match')
            }
        }
        if (mode === 'login') {
            AuthService.login({ username: data.username, password: data.password }).then(data => {
                data.success ? router.push('/dashboard') : null
            })
        }
    }

    return <AuthWrapper>
        <AuthCard>
            {mode === 'register' ?
                <form>
                    <AuthTitle>Please register</AuthTitle>
                    <AuthSubtitle>
                        <ul>
                            <li>8 character minimum</li>
                            <li>mix case</li>
                            <li>a number</li>
                            <li>a special character</li>
                        </ul>
                    </AuthSubtitle>
                    <Input
                        type="text"
                        label="enter username"
                        value={credentials.username}
                        onChange={val => setCredentials(prevState => { return { ...prevState, username: val } })}
                    />
                    <Input
                        type="email"
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

                </form>
                :
                <form>
                    <AuthTitle>
                        Welcome back
                    </AuthTitle>
                    <Input
                        type="text"
                        label="enter username"
                        value={credentials.username}
                        onChange={val => setCredentials(prevState => { return { ...prevState, username: val } })}
                    />
                    <Input
                        type="password"
                        autoComplete="new-password"
                        label="enter password"
                        value={credentials.password}
                        onChange={val => setCredentials(prevState => { return { ...prevState, password: val } })}
                    />
                </form>
            }

            <AuthButton onClick={() => handleClick(credentials, mode)}>Submit</AuthButton>
        </AuthCard>
        <AuthBackground backgroundImg={WorkingOut} />
    </AuthWrapper>
}

