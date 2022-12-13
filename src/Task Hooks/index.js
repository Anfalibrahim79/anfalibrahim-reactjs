import React from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'
import HeroSection from './HeroSection'
import NavbarHooks from './Navbar'
import NewsContent from './NewsContent'
import './style.css' 

const NewsHooks = () => {
  return (
    <>
      <NavbarHooks />
      <HeroSection />
      <NewsContent />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default NewsHooks