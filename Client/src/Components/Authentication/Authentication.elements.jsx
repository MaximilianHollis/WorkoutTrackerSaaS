import styled from 'styled-components';
import { Theme, Button } from '../../globalStyles'

export const AuthWrapper = styled.div`
    width: 100%;
    height: 100vh;
`

export const AuthCard = styled.div`
    background: #fff;
    height: 100%;
    width: 25%;
    padding: 5%;
    background: ${Theme.darkPurple};
    float: left;
`

export const AuthBackground = styled.div`
    background: #f1f1f1;
    background-image: ${({ backgroundImg }) => (backgroundImg ? `url(${backgroundImg})` : null)};
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
    height: 100%;
    width: 75%;
    float: right;
`
export const AuthButton = styled(Button)`
    
`