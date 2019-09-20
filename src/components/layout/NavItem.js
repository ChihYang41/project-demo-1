import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function NavItem(props) {
  const { text, exact, to, logOut } = props;
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <li className={match ? 'active' : ''}>
          {match ? '' : ''}
          <Link to={to} className="nav-link" onClick={logOut}>{text}</Link>
        </li>
      )}
    />
  );
}