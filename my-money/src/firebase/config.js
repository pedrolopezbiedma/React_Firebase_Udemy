import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAn8sKWIyCpJQvR-uEODgqNOi02eVWuWQc",
    authDomain: "mymoney-ninja-site-fd42d.firebaseapp.com",
    projectId: "mymoney-ninja-site-fd42d",
    storageBucket: "mymoney-ninja-site-fd42d.appspot.com",
    messagingSenderId: "1091772104659",
    appId: "1:1091772104659:web:15b54ce5841d84cc30b926"
  };

// Firebase initialization
  firebase.initializeApp(firebaseConfig);

// Firestore database initializacion
  const projectFirestore = firebase.firestore();

// Authentication initialization.
  const projectAuthentication = firebase.auth();

export { projectFirestore, projectAuthentication };