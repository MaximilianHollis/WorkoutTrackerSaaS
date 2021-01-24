import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../Contexts/AuthContext'
import WorkoutService from '../../Services/WorkoutService'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Stripe/CheckoutForm";

import {
    PricingWrapper,
    PricingCard,
    PricingCardWrapper,
    PricingButton

} from './Pricing.elements'

const promise = loadStripe("pk_test_51HXEBwByoYw9YHw821lyiRGHVHsuY0JuD20kHJ1rQ5Ol5M6OCqRhnODdAKBu7scFP3CiM35cfFLcsB04ynZo94wl00TRvljYyG");

export default function Pricing({ }) {
    const { user } = useContext(AuthContext)

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
    }

    const getWorkouts = () => {
        WorkoutService.getWorkouts(user).then(res =>
            res.workouts.map(w => console.log(w)))
    }

    return <PricingWrapper>
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
        <PricingCardWrapper>
            {/*             <PricingCard>
                El Cheapo
            </PricingCard> */}
            <PricingCard highlight>
                Premium
                Purchase $5 card
                <PricingButton onClick={() => purchasePlan('premium')}>Purchase</PricingButton>
                Read Workouts
                <PricingButton onClick={getWorkouts}>Get Workouts</PricingButton>

                Add a Workout
                <PricingButton onClick={() => addWorkout({ type: 'jogging', duration: 'hour', time: 'weekly' })}>Add workout</PricingButton>


                Test Token
                <PricingButton onClick={() => handleClick()}>TestToken</PricingButton>
            </PricingCard>
            {/*             <PricingCard onClick={test}>
                Gimme money
            </PricingCard> */}
        </PricingCardWrapper>
    </PricingWrapper>
}