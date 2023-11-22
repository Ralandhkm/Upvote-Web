import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import profile from '../assets/profile.jpg'

const Bar = () => {
  const [style, setStyle] = useState({
    background: '#050426',
    height: '100px',
   });

   useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) { // Ubah 50 ke tinggi yang sesuai
        setStyle({
          background: '#18181b',
          height: '70px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        })
      } else{
        setStyle({
          background: '#050426',
          height: '100px',
        })
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Navbar expand="lg" className="bg" sticky="top" style={style}>
      <Container>
        <Navbar.Brand href="/" className='logo'>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="judul">
            <Nav.Link className='nav-item' href="/">Beranda</Nav.Link>
            <Nav.Link className='nav-item' href="/createvote">Create Vote</Nav.Link>
            <Nav.Link className='nav-item' href="/about"> About</Nav.Link>
            <Nav.Link className='nav-item' href="/browse">Browse</Nav.Link>
            <Nav.Link className='nav-item' href="/purchased">Purchased</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" href="/purchased">
              <NavDropdown.Item href="/voteboo">Vote Book</NavDropdown.Item>
              <NavDropdown.Item href="/requestedbook">Requested Book</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Brand href="/profile" className="icon">
            <img src={profile} className='rounded-5' alt="avatar image" height="40"/>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Bar 