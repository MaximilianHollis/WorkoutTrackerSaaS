import styled from 'styled-components'
import AuthService from '../src/Services/AuthService';
import Link from 'next/link'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const onSubmit = e => {
  AuthService.register({username: '', password: 'a', plan: 'free'}).then(data => {
    console.log(data);
  });
}

export default function Home() {
  return <>
    <button onClick={onSubmit}>register</button>
    <button onClick={onSubmit}>register</button>
    <Link href="/authentication">
          <a>log in</a>
        </Link>
    <button onClick={onSubmit}>log out</button>

  
  </>
}