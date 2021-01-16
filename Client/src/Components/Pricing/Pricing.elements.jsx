import styled from 'styled-components';
import { Theme, Button } from '../../globalStyles'

export const PricingWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5%;
`

export const PricingCardWrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    height: 75%;
    `

export const PricingCard = styled.div`
    background: #fff;
    width: 25%;
    padding: 5%;
    border-radius: 40px 10px 40px 10px;
    background: ${({color}) => color === 'highlight' ? Theme.purple : Theme.darkPurple};
    
    box-shadow: 20px 25px 10px 0px  ${({color}) => color === 'highlight' ? Theme.purple + 90 : Theme.darkPurple + 90} ;
`