import React from 'react'
import HeroSection from './components/HeroSection'
import NavbarRedux from './components/NavbarRedux'
import './assets/style.css'
import NewsContent from './components/NewsContent'

const Index = () => {
  return (
    <>
        <NavbarRedux />
        <HeroSection />
        <NewsContent />
    </>
  )
}

export default Index