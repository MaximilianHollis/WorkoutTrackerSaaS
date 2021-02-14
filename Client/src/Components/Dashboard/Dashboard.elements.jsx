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
    height: 90vh;
    padding: 2%;
    z-index: 2;
`

export const GreetingContainer = styled.div`
    padding: 5%;
    margin-bottom: 5%;
`

export const TimeOfDay = styled.h2`
    color: white;
    font-size: 36px;
    font-weight: lighter;
    margin-bottom: 1%;
`

export const Username = styled.h2`
    color: ${Theme.purple};
`

export const HighlightContainer = styled.div`
    padding: 2%;
    position: relative;
`

export const HighlightCard = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 100%;
    height: 40vh;
    box-shadow: ${Theme.purple + 50} 0px 6px 16px 0px;
`

export const HighlightImg = styled.img`
    background-color: white;
    border-radius: 20px;
    width: 100%;
`

export const HighlightCardTitle = styled.div`
    border-radius: 20px;
    height: 20vh;
    clip-path: polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%, 95% 0%, 100% 0%, 100% 100%);
    background: linear-gradient(to top, ${Theme.purple}, rgb(148, 110, 214, .99));
    transform: translateY(-46px);
`

export const HighlightCardIcon = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    position: absolute;
    z-index: 999;
    bottom: 0;
    left: 0;
    transform: translate(30px, -110px);
    box-shadow: ${Theme.purple + 50} 0px 6px 16px 0px;
`