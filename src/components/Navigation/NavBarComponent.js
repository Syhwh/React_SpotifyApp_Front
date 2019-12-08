import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import logo from '../../assets/banner-ico.png'
import './style.scss';
export function NavBarComponent() {
  const { user } = useContext(AuthContext);
  return (
    <Navbar bg='dark' variant='dark'>

      <Navbar.Brand href='/'>
        <img
          src={logo}
          width='50'
          height='50'
          alt='logo'
          className='mr-2'
        />
        My Mussic App </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link className=' navbar-nav nav-link ' to='/'>Home</Link>
          {!user &&
            <Link to='/' className=' navbar-nav nav-link ' onClick={() => window.location = 'http://localhost:3001/login'}>Login</Link>
          }
          {user && <>
            <Link className=' navbar-nav nav-link ' to='/profile'>Profile</Link>
            <Link className=' navbar-nav nav-link ' to='/logout'>Logout</Link>
          </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}