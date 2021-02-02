import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBbhmyAQXZz0nH5XJiXa3jHMHVBwocgFMs",
    authDomain: "project2-3567b.firebaseapp.com",
    databaseURL: "https://project2-3567b-default-rtdb.firebaseio.com",
    projectId: "project2-3567b",
    storageBucket: "project2-3567b.appspot.com",
    messagingSenderId: "46113858425",
    appId: "1:46113858425:web:54ffdd9977f191307785a8",
    measurementId: "G-4JG914RZ2D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore() 