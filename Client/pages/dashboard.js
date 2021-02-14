import react, { useState, useContext } from 'react'
import DashboardPage from '../src/Components/Dashboard/Dashboard'
import BottomNavbar from '../src/Components/Navbar/Navbar'
import FAB from '../src/Components/FAB/FAB'

export default function Dashboard() {
  return <>
    <FAB />
    <DashboardPage/>
    <BottomNavbar activeTab={'dashboard'}/>
  </>
}