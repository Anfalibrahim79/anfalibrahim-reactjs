import React from 'react'
import NavbarRouter from './components/Navbar'
import './assets/style.css'
import HeroSection from './components/HeroSection'
import NewsContent from './components/NewsContent'
import Login from './components/Login'
import Routes from './Routes'
import NavbarHome from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <>
        <NavbarHome/>
        <HeroSection/>
        <NewsContent />

    </>
 )
}

export default Index