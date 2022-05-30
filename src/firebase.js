import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC9br3IrFzoOAanBTFcQioK9n1WOz4HX4s",
    authDomain: "chat-1-39437.firebaseapp.com",
    projectId: "chat-1-39437",
    storageBucket: "chat-1-39437.appspot.com",
    messagingSenderId: "388732226045",
    appId: "1:388732226045:web:20fba4b45bbdfc69b97194"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}