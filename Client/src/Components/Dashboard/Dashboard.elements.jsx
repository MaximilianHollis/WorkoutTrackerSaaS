import { urlencoded } from 'body-parser';
import styled from 'styled-components';
import { Theme, Button } from '../../globalStyles'

export const DashboardWrapper = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50vh;
    background-color: ${Theme.darkPurple};
    z-index: 0;
`

export const DashboardImg = styled.div`
    height: 50vh;
    background-image: ${({ backgroundImg }) => (backgroundImg ? `url(${backgroundImg})` : null)};
    background-position: top;
    background-size: auto;
    background-repeat: no-repeat;
    position: fixed;
    bottom: 1vh;
    width: 100%;
    z-index: 0;
`

export const DashboardContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 2%;
    z-index: 2;
`

export const GreetingContainer = styled.div`
    padding: 5%;

`

export const TimeOfDay = styled.h2`
    color: white;
    font-size: 36px;
    font-weight: lighter;
`

export const Username = styled.h2`
    color: ${Theme.purple};
`