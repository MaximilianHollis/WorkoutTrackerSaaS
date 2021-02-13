import react, { useState, useContext } from 'react'
import DashboardPage from '../src/Components/Dashboard/Dashboard'
import BottomNavbar from '../src/Components/Navbar/Navbar'

export default function Dashboard() {
  return <>
    <DashboardPage/>
    <BottomNavbar/>
  </>
}