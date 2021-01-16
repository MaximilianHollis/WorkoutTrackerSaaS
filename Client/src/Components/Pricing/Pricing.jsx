import { token } from 'morgan'
import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../Contexts/AuthContext'

import {
    PricingWrapper,
    PricingCard,
    PricingCardWrapper,
    PricingButton

} from './Pricing.elements'


export default function Pricing({ }) {
    const {token} = useContext(AuthContext)

    const handleClick = () => {
        console.log(token)
    }

    return <PricingWrapper>
        <PricingCardWrapper>
            <PricingCard>
                El Cheapo
            </PricingCard>
            <PricingCard highlight>
                Premium
                <PricingButton onClick={() => handleClick()}>Purchase</PricingButton>
            </PricingCard>
            <PricingCard>
                Gimme money
            </PricingCard>
        </PricingCardWrapper>
    </PricingWrapper>
}