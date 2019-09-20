import React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const LogedOutLinks = () => {
  return (
    <Nav>
      <NavItem to="/signup" text="Sign Up">Sign Up</NavItem>
      <NavItem to="/login" text="Log in">Log in</NavItem>
    </Nav>
  )
}

export default LogedOutLinks;




