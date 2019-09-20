import React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const LogedInLinks = ({logOut}) => {
  return (
    <Nav>
      <NavItem to="/newproject" text="New Project">New Project</NavItem>
      <NavItem to="/" text="Log out" logOut={logOut}>Log out</NavItem>
    </Nav>
  )
}

export default LogedInLinks;


