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
    DailyWorkoutContainer,
    PickADay,
    PickADayContent,
    PickADayHeader,
    PickADayDate,
} from './Dashboard.elements'

export default function DashboardPage() {
    const [activeDay, setActiveDay] = useState('Sun');



    function Dates({ activeDay }) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        return <>
            {daysOfWeek.map((day, index) => {
                return <PickADay active={activeDay == day} onClick={() => setActiveDay(daysOfWeek[index])}>
                    <PickADayContent>
                        <PickADayHeader>{index + 14}</PickADayHeader>
                        <PickADayDate>{day}</PickADayDate>
                    </PickADayContent>
                </PickADay>
            })}
        </>
    }

    return <>
        <DashboardWrapper />
        <DashboardImg backgroundImg={DashboardBackground} />
        <DashboardContainer>
            <GreetingContainer>
                <TimeOfDay>Good Evening, </TimeOfDay>
                <Username>Sübügätäi</Username>
            </GreetingContainer>
            <DailyWorkoutContainer>
                <Dates activeDay={activeDay}/>
            </DailyWorkoutContainer>
        </DashboardContainer>
    </>
}