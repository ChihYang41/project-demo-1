import React from 'react';
import { connect } from "react-redux";
import MainNavbar from '../components/layout/Navbar';

const MainNavbarContainer = props => {
  return (
    <MainNavbar {...props} />
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, null)(MainNavbarContainer);