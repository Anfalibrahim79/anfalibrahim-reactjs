import React from 'react'

import './assets/style.css'
import HeroSection from './components/HeroSection'
import NewsContent from './components/NewsContent'

import NavbarHome from './components/Navbar'



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