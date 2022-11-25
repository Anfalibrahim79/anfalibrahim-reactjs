import React, { useState } from 'react';
import NavigationBar from './component/NavigationBar';
import FormComponent from './Task Form and Validation/FormComponent';
import ContactBio from './Tugas-Style-Component/contactForm';
import ContainBody from './Tugas-Style-Component/container';
import FooterBio from './Tugas-Style-Component/footer';
import MyBio from './Tugas-Style-Component/mybio';
import NavbarBio from './Tugas-Style-Component/navbar';
import './App.css'

const App =  () =>{
  
  return (
      <>
      {/* <NavbarBio/>
      <ContainBody />
      <MyBio/>
      <ContactBio/>
      <FooterBio/> */}
      <FormComponent/>
      </>
  );
}

export default App;
