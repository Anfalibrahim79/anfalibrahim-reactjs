import React from 'react'
import ContactBio from '../Tugas-Style-Component/contactForm'
import FooterBio from '../Tugas-Style-Component/footer'
import HeroSection from './HeroSection'
import NavbarNews from './Navbar'
import NewsContent from './NewsContent'

export default class News extends React.Component {
  render() {
    return (
        <>
            <NavbarNews />
            <HeroSection />
            <NewsContent />
            <ContactBio />
            <FooterBio />
        </>
    )
  }
}
