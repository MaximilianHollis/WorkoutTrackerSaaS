import React, { useState, useContext, useEffect } from 'react'

import {
    PricingWrapper,
    PricingCard,
    PricingCardWrapper,
    PricingButton

} from './Pricing.elements'


export default function Pricing({ }) {


    const handleClick = () => {
        
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