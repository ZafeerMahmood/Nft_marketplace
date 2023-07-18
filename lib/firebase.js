// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaR9z8Ty4vS6_lGq4ynLvAthjV1e3jZtc",
  authDomain: "web3-next-moralis-ganche.firebaseapp.com",
  projectId: "web3-next-moralis-ganche",
  storageBucket: "web3-next-moralis-ganche.appspot.com",
  messagingSenderId: "95102446738",
  appId: "1:95102446738:web:2270a68eff6487fb774a4b"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();