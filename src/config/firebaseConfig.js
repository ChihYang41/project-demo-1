import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJocq3xFO10DCWBTLNw-fl4y83TacBWNk",
  authDomain: "chihyang41-habit-tracker.firebaseapp.com",
  databaseURL: "https://chihyang41-habit-tracker.firebaseio.com",
  projectId: "chihyang41-habit-tracker",
  storageBucket: "",
  messagingSenderId: "452763475041",
  appId: "1:452763475041:web:2ec04d9cde97cbcb065e20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;