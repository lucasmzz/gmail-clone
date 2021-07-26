import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRk6rGmD_5mYg9dddQO1hLSJKjiM1y4wA",
  authDomain: "clone-8d6b3.firebaseapp.com",
  projectId: "clone-8d6b3",
  storageBucket: "clone-8d6b3.appspot.com",
  messagingSenderId: "150240700551",
  appId: "1:150240700551:web:c93c3e9f4efc349dc4b022",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
