import React from 'react';
import { connect } from "react-redux";
import LogIn from '../components/auth/LogIn';
import { logIn } from '../store/actions/authActions'

const LogInContainer = (props) => {
  return (
    <LogIn {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => dispatch(logIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer)