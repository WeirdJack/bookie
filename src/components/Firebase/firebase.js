import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCiEaE63Zqesur5h9zbEo2KrGOYYRg4LmA",
    authDomain: "bookie-f669a.firebaseapp.com",
    databaseURL: "https://bookie-f669a-default-rtdb.firebaseio.com",
    projectId: "bookie-f669a",
    storageBucket: "bookie-f669a.appspot.com",
    messagingSenderId: "325905964",
    appId: "1:325905964:web:2552abe912fe09dc4f2b89",
    measurementId: "G-KZRXDKSYNK"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);
 
    users = () => this.db.ref('users');
  }
   
  export default Firebase;