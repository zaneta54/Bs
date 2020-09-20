import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCAVbdOoYi7BYYVkPhA6Y9zCQ8T3E7VrLw",
    authDomain: "barter-system-7a39a.firebaseapp.com",
    databaseURL: "https://barter-system-7a39a.firebaseio.com",
    projectId: "barter-system-7a39a",
    storageBucket: "barter-system-7a39a.appspot.com",
    messagingSenderId: "275894532286",
    appId: "1:275894532286:web:519e4a702f2a34244406ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);