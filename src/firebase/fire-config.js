
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBB4uR1ZHIS8nljlQXFx8IMPygq9n2W4PY",
    authDomain: "pokemon-app-11ffd.firebaseapp.com",
    projectId: "pokemon-app-11ffd",
    storageBucket: "pokemon-app-11ffd.appspot.com",
    messagingSenderId: "208433135269",
    appId: "1:208433135269:web:364bb04d4b69225b0a974c"
  };
  
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}