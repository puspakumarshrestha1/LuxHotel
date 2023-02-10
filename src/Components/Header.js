import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <>

        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img className='logo' src='https://duruthemes.com/demo/html/cappa/demo2/img/logo.png' alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link  href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">ABOUT</Nav.Link>
                <Nav.Link href="#link">ROOM & SUITES</Nav.Link>
                <Nav.Link href="#link">RESTAURANTS</Nav.Link>
                <Nav.Link href="#link">SPA</Nav.Link>
                <Nav.Link href="#link">CONTACT</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
    </>
  )
}

export default Header
