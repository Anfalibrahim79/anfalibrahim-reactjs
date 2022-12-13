import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'
import './style.css'
export default class NavbarNews extends React.Component {
  render() {
    return (
  <Navbar className='navbar-news' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mx-5"
              style={{ maxHeight: '100px' }}
              navbarScroll
              >
              <Nav.Link className='mx-2' href="#action1">Home</Nav.Link>
              <Nav.Link className='mx-2' href="#action2">About</Nav.Link>
              <Nav.Link className='mx-2' href="#action2">News</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
    )
  }
}
