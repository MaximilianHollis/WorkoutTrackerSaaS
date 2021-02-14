import { urlencoded } from 'body-parser';
import styled from 'styled-components';
import { Theme, Button } from '../../globalStyles'

export const DashboardWrapper = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 20vh;
    background-color: ${Theme.darkPurple};
    z-index: 0;
`

export const DashboardImg = styled.div`
    height: 80vh;
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

export const DailyWorkoutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 10px 20px 20px 10px;

    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 3px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 3px;
    } 
`

export const PickADay = styled.div`
    border-radius: 20px;
    background: ${Theme.purple + 20};
    height: 80px;
    margin-right: 15px;
    box-shadow: 0 4px 8px ${Theme.purple + 10};

    ${({active}) => active && `
        background: ${Theme.purple + 50};
        box-shadow: 0 5px 10px ${Theme.purple + 50};
        transition: 1s;
    `}
`

export const PickADayContent = styled.div`
    width: 70px;
    padding-top: 5px;
`

export const PickADayHeader = styled.h2`
    width: 50%;
    font-weight: normal;
    font-size: 30px;
    margin: auto;
    color: white;
`

export const PickADayDate = styled.h3`
    width: 50%;
    font-weight: lighter;
    font-size: 20px;
    margin: auto;
    color: white;
`