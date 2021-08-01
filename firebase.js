import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA4nU8PSdqyPTpWXmXGek29n9qLk3JUDWY",
    authDomain: "meetup-d138a.firebaseapp.com",
    projectId: "meetup-d138a",
    storageBucket: "meetup-d138a.appspot.com",
    messagingSenderId: "958724060946",
    appId: "1:958724060946:web:34abeec1af97840b05e5cb",
    measurementId: "G-F1HV8199N9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();


export { db, auth};