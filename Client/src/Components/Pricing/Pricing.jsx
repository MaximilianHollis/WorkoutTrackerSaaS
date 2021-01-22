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
    const {user} = useContext(AuthContext)

    const handleClick = () => {
        console.log(user)
    }

    const test = () => {
        WorkoutService.postWorkouts({})
    }

    const purchasePlan = plan => {
        console.log(plan)
    }

    const addWorkout = workout => {
        WorkoutService.postWorkouts(workout, user)
        console.log(workout)
    }

    return <PricingWrapper>
        <PricingCardWrapper>
{/*             <PricingCard>
                El Cheapo
            </PricingCard> */}
            <PricingCard highlight>
                Premium
                Purchase $5 card
                <PricingButton onClick={() => purchasePlan('premium')}>Purchase</PricingButton>

                Add a Workout
                <PricingButton onClick={() => addWorkout({type: 'jogging', duration: 'hour', time: 'weekly'})}>Add workout</PricingButton>


                Test Token
                <PricingButton onClick={() => handleClick()}>TestToken</PricingButton>
            </PricingCard>
{/*             <PricingCard onClick={test}>
                Gimme money
            </PricingCard> */}
        </PricingCardWrapper>
    </PricingWrapper>
}