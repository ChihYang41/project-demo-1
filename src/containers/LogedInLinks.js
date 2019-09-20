import React from 'react';
import { connect } from "react-redux";
import LogedInLinks from '../components/layout/LogedInLinks';
import { logOut } from '../store/actions/authActions';

const LogedInLinksContainer = (props) => {
  return (
    <LogedInLinks {...props} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(LogedInLinksContainer);