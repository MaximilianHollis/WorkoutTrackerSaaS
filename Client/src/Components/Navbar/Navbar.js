import React, { useState, useContext, useEffect } from 'react'
import { IoCompassSharp, IoTrophySharp } from 'react-icons/io5'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { IconContext } from "react-icons";
import useLocalStorageState from 'use-local-storage-state'

import { Theme } from '../../globalStyles'
import {
    NavbarWrapper,
    TabWrapper,
    NavLink
} from './Navbar.elements'


export default function BottomNavBar({activeTab}) {
    function Tab({ icon, name }) {
    
        return <IconContext.Provider value={{ color: Theme.darkPurple, size: '36' }}>
            <NavLink href={'/' + name} active={activeTab  ? activeTab == name : false}>
                {icon}
            </NavLink>
        </IconContext.Provider>
    }



    return <NavbarWrapper>
        <TabWrapper>
            <Tab icon={<IoTrophySharp />} name='goals'/>
            <Tab icon={<IoCompassSharp />} name='dashboard'/>
            <Tab icon={<GiWeightLiftingUp />} name='workouts' />
        </TabWrapper>
    </NavbarWrapper>
}

