// reducers
const initState = {
  isLoadingLogin: false,
  isLoadingSingup: false,
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      console.log('login started')
      return {
        ...state,
        authError: null,
        isLoadingLogin: true
      }
    case 'LOGIN_SUCCESS':
      console.log('login succeess')
      return {
        ...state,
        isLoadingLogin: false
      }
    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state,
        authError: 'Login failed',
        isLoadingLogin: false
      }
    case 'SIGNUP_STARTED':
      console.log('signup started')
      return {
        ...state,
        authError: null,
        isLoadingSingup: true
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup succeess')
      return {
        ...state,
        authError: null,
        isLoadingSingup: false
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message,
        isLoadingSingup: false
      }
    default:
      return state;
  }
}

export default authReducer;