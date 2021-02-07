import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiEaE63Zqesur5h9zbEo2KrGOYYRg4LmA",
    authDomain: "bookie-f669a.firebaseapp.com",
    databaseURL: "https://bookie-f669a-default-rtdb.firebaseio.com",
    projectId: "bookie-f669a",
    storageBucket: "bookie-f669a.appspot.com",
    messagingSenderId: "325905964",
    appId: "1:325905964:web:2552abe912fe09dc4f2b89",
    measurementId: "G-KZRXDKSYNK"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };