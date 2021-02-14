import React, { useState, useContext, useEffect } from 'react'
import DashboardBackground from '../../../public/images/DashboardBackground.svg'
import WorkingOut from '../../../public/images/WorkingOut.svg'
import Subutai from '../../../public/images/subutai.png'
import DateContext from '../../Contexts/DateContext'

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
    const { date } = useContext(DateContext)


    function Dates({ activeDay }) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthsOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        console.log(date)

        return <>
            {daysOfWeek.map((day, index) => {
                return <PickADay active={activeDay == day} onClick={() => setActiveDay(daysOfWeek[index])} key={day}>
                    <PickADayContent>
                        <PickADayHeader>{index + 14}</PickADayHeader>
                        <PickADayDate>{day.slice(0, 3)}</PickADayDate>
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
                <TimeOfDay>Good {date.timeOfDay}, </TimeOfDay>
                <Username>Sübügätäi</Username>
            </GreetingContainer>
            <DailyWorkoutContainer>
                <Dates activeDay={activeDay} />
            </DailyWorkoutContainer>
        </DashboardContainer>
    </>
}