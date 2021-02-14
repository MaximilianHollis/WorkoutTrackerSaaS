import React, { useState, useContext, useEffect } from 'react'
import { MdMenu } from 'react-icons/md'
import defaultProfile from '../../../public/images/default.svg'

import { Theme } from '../../globalStyles'
import {
    MenuWrapper,
    MenuButton,
    ProfileImg
} from './FAB.elements'


export default function FAB() {
    return <MenuWrapper>
        <ProfileImg src={defaultProfile}/>
    </MenuWrapper>
}

