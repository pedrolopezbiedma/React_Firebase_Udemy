import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHVI6ZKdXrXKExo_zFZY0wxHN91iu4vu4",
    authDomain: "cooking-ninja-site-aca08.firebaseapp.com",
    projectId: "cooking-ninja-site-aca08",
    storageBucket: "cooking-ninja-site-aca08.appspot.com",
    messagingSenderId: "1048156515506",
    appId: "1:1048156515506:web:23478852ba2f94172d2dab"
  };

// Firebase initialization
  firebase.initializeApp(firebaseConfig);

// Firestore initializacion
  const projectFirestore = firebase.firestore();

export { projectFirestore };