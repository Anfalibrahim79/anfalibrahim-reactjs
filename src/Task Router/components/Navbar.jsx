import React, { useState, useEffect } from 'react'
import { Nav, Container,Navbar } from 'react-bootstrap'
import { Link, Outlet} from 'react-router-dom'
import { BeatLoader } from 'react-spinners';

const NavbarHome = () => {
  
  return (
    <>
    
    <Navbar className='navbar-news sticky-top bg-white lh-1' expand="lg ">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize: "2.5rem", fontWeight: "bold", marginLeft : "20px"}}><Link to={'/'} style={{textDecoration: "none", color: "#FD8A8A"}}>Daily News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5"
            style={{ maxHeight: '200px' }}
            navbarScroll
            >
            <div className='nav-li'>
              {/* <Nav.Link href="#action1"> Home</Nav.Link> */}
              <Link to={'/'}>Home</Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">News</Nav.Link>
            </div>

          </Nav>
            <div className='btnauth'>
              <Link to={'/login'}>
                <button type='button' className='btnlogin'>Login</button> 
              </Link>
              <Link to={'/register'}>
                <button type='button' className='btnsignup'>SignUp</button>
              </Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Outlet/>
 
    </>
    
  )
}

export default NavbarHome