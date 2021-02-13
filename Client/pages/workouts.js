import react, { useState, useContext } from 'react'
import BottomNavbar from '../src/Components/Navbar/Navbar'

export default function Workouts() {
  return <>
    <BottomNavbar activeTab={'workouts'}/>
  </>
}