import {
        loginStarted,
        loginSuccess,
        loginFailed,
        logoutSuccess,
        signupStarted,
        singupSuccess,
        signupFailed
      } from './actionCreator';

export const logIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    dispatch(loginStarted());

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch(loginSuccess());
    }).catch((err) => {
      dispatch(loginFailed(err))
    })
  }
}

export const logOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch(logoutSuccess())
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch(signupStarted());

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        nickname: newUser.nickname
      })
    }).then(() => {
      dispatch(singupSuccess())
    }).catch((err) => {
      dispatch(signupFailed(err))
    })
  }
}