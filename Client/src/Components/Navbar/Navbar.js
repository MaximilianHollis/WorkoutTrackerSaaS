import React, { useState, useContext, useEffect } from 'react'
import { IoCompassSharp, IoTrophySharp } from 'react-icons/io5'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { IconContext } from "react-icons";

import { Theme } from '../../globalStyles'
import {
    NavbarWrapper,
    TabWrapper,
    NavLink
} from './Navbar.elements'


export default function BottomNavBar() {
    const [active, setActive] = useState('dashboard')

    return <NavbarWrapper>
        <TabWrapper>
            <Tab active={active ? active == 'goals' : false} icon={<IoTrophySharp />} />
            <Tab active={active ? active == 'dashboard' : false } icon={<IoCompassSharp />} />
            <Tab active={active ? active == 'workouts': false} icon={<GiWeightLiftingUp />} />

        </TabWrapper>
    </NavbarWrapper>
}

function Tab({ icon, active }) {
    return <IconContext.Provider value={{ color: Theme.darkPurple, size: '36' }}>
        <NavLink href='/dashboard' active={active}>
            {icon}
        </NavLink>
    </IconContext.Provider>


}