import React from 'react';
import { connect } from "react-redux";
import SignUp from '../components/auth/SignUp';
import { signUp } from '../store/actions/authActions';

const SignUpContainer = (props) => {
  return (
    <SignUp {...props} />
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
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)