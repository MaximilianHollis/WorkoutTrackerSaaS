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
    width: 800px;
    padding: 5%;
    border-radius: 40px 10px 40px 10px;
    background: ${({highlight}) => highlight ? Theme.purple : Theme.darkPurple};
    box-shadow:   ${({highlight}) => highlight ? `10px 15px 5px 0px` + Theme.purple + 90 : `10px 15px 10px 0px` + Theme.darkPurple + 90} ;
`

export const PricingButton = styled(Button)`
    width: 100%;
    box-shadow: inset 0 0 5px #1c1e32;

    &:hover {
        background: ${Theme.darkPurple}
    }
`