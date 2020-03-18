import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDRbOr3ZC7kBtT5dVQCy2g9VE1RFSkG6tk",
  authDomain: "react-slack-clone-bb600.firebaseapp.com",
  databaseURL: "https://react-slack-clone-bb600.firebaseio.com",
  projectId: "react-slack-clone-bb600",
  storageBucket: "react-slack-clone-bb600.appspot.com",
  messagingSenderId: "152494032646",
  appId: "1:152494032646:web:b392d9abdb58929ba5c087",
  measurementId: "G-EP4BS7RBS4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
