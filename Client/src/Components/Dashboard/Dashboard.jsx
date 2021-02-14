import React, { useState, useContext, useEffect } from 'react'
import DashboardBackground from '../../../public/images/DashboardBackground.svg'

import {
    DashboardWrapper,
    DashboardImg,
    DashboardContainer,
    GreetingContainer,
    TimeOfDay,
    Username
} from './Dashboard.elements'

export default function DashboardPage() {
    return <>
        <DashboardWrapper />
        <DashboardImg backgroundImg={DashboardBackground} />
        <DashboardContainer>
            <GreetingContainer>
                <TimeOfDay>Good Evening, </TimeOfDay>
                <Username>Sübügätäi</Username>

            </GreetingContainer>

        </DashboardContainer>

    </>
}