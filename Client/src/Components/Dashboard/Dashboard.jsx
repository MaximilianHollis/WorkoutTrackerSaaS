import React, { useState, useContext, useEffect } from 'react'
import DashboardBackground from '../../../public/images/DashboardBackground.svg'
import WorkingOut from '../../../public/images/WorkingOut.svg'
import Subutai from '../../../public/images/subutai.png'

import {
    DashboardWrapper,
    DashboardImg,
    DashboardContainer,
    GreetingContainer,
    TimeOfDay,
    Username,
    HighlightContainer,
    HighlightCard,
    HighlightImg,
    HighlightCardTitle,
    HighlightCardIcon
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
            <HighlightContainer>
                <HighlightCard >
                    <HighlightImg src={WorkingOut}/>
                    <HighlightCardTitle />
                    <HighlightCardIcon src={Subutai}/>
                </HighlightCard>
            </HighlightContainer>
        </DashboardContainer>

    </>
}