import React from 'react';
import LogedInLinks from '../../containers/LogedInLinks';
import LogedOutLinks from './LogedOutLinks';
import NavItem from './NavItem';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.scss';

const MainNavbar = (props) => {
  const isLogin = props.auth.uid;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Navbar.Brand>Habit Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem exact to="/" text="Projects"/>
        </Nav>
        {
          isLogin ?
            <LogedInLinks/>
            :
            <LogedOutLinks/>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNavbar;