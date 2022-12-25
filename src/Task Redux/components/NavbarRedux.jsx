import React from 'react'
import { Navbar, Nav , Container } from 'react-bootstrap'

const NavbarRedux = () => {
  return (
    <Navbar className='navbar-news sticky-top bg-white ' expand="lg ">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5"
            style={{ maxHeight: '200px' }}
            navbarScroll
            >
            <Nav.Link className='mx-2' href="#action1">Home</Nav.Link>
            <Nav.Link className='mx-2' href="#action2">About</Nav.Link>
            <Nav.Link className='mx-2' href="#action2">News</Nav.Link>

          </Nav>
            <div className='btnauth'>
              <button type='button' className='btnlogin'>Login</button>
              <button type='button' className='btnsignup'>SignUp</button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
}

export default NavbarRedux