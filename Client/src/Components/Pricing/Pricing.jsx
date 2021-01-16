import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../Contexts/AuthContext'
import WorkoutService from '../../Services/WorkoutService'

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

    const test = () => {
        WorkoutService.postWorkouts({})
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
            <PricingCard onClick={test}>
                Gimme money
            </PricingCard>
        </PricingCardWrapper>
    </PricingWrapper>
}