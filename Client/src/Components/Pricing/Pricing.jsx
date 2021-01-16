import React, { useState, useContext, useEffect } from 'react'

import {
    PricingWrapper,
    PricingCard,
    PricingCardWrapper

} from './Pricing.elements'


export default function Pricing({ }) {

    return <PricingWrapper>
        <PricingCardWrapper>
            <PricingCard>
                g
            </PricingCard>
            <PricingCard color='highlight'>
                g
            </PricingCard>
            <PricingCard>
                g
            </PricingCard>
        </PricingCardWrapper>
    </PricingWrapper>
}