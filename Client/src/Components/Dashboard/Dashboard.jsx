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
    const { date } = useContext(DateContext)

    function Dates({ activeDay }) {
        const [active, setActive] = useState(activeDay);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let indexBuffer = daysOfWeek.findIndex(day => day == date.dayOfWeek)

        while (indexBuffer < 2) {
            daysOfWeek.unshift(daysOfWeek.pop());
            indexBuffer++;
        }

        while (indexBuffer > 2) {
            daysOfWeek.push(daysOfWeek.shift());
            indexBuffer--;
        }

        return <>
            {daysOfWeek.map((day, index) => {
                return <PickADay active={active == day} onClick={() => setActive(daysOfWeek[index])} key={day}>
                    <PickADayContent>
                        <PickADayHeader>{index + parseFloat(date.day) - indexBuffer}</PickADayHeader>
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
                <TimeOfDay>Good {date.timeOfDay},</TimeOfDay>
                <Username>Sübügätäi </Username>

            </GreetingContainer>
            <DailyWorkoutContainer>
                <Dates activeDay={date.dayOfWeek} />


            </DailyWorkoutContainer>
        </DashboardContainer>
    </>
}