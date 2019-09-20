// action creator
export const loginStarted = () => {
  return {
    type: 'LOGIN_STARTED'
  }
}

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

export const loginFailed = (err) => {
  return {
    type: 'LOGIN_ERROR',
    err
  }
}

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

export const signupStarted = () => {
  return {
    type: 'SIGNUP_STARTED'
  }
}

export const singupSuccess = () => {
  return {
    type: 'SIGNUP_SUCCESS'
  }
}

export const signupFailed = (err) => {
  return {
    type: 'SIGNUP_ERROR',
    err
  }
}