import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



const PageNavbar = () => {


  return (
    <Navbar bg='dark' expand='sm' >
      <Container>
        <Navbar.Brand as={Link} to='/' className='text-danger'>HomePage</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav.Link as={Link} to='/animes'>Character List</Nav.Link>
          <Nav.Link as={Link} to='/episodes'>Episode List</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar 