//import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/firestore';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOvZXaREWwI-KqfTKsYxJ6DUQ1bN_yeq0",
  authDomain: "disney-clone-8c6fd.firebaseapp.com",
  projectId: "disney-clone-8c6fd",
  storageBucket: "disney-clone-8c6fd.appspot.com",
  messagingSenderId: "903004942577",
  appId: "1:903004942577:web:a34732123d9aef4738f950",
  measurementId: "G-C36LJPY921"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
//const storage = firebase.storage();

//export { auth, provider, storage };
export default db;

