import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAo3GLsy9Zc22vpdeNM-SjYaClP6dSHyD0",
    authDomain: "olx-sample-ae0d4.firebaseapp.com",
    projectId: "olx-sample-ae0d4",
    storageBucket: "olx-sample-ae0d4.appspot.com",
    messagingSenderId: "492963748223",
    appId: "1:492963748223:web:dbd05ad39c1b2269bf224a",
    measurementId: "G-F7DL6BRTBD"
  };

export  default  firebase.initializeApp(firebaseConfig)