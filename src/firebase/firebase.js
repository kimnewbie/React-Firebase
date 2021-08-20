import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaZuLYHHuanSBEzujwhkdm6KIznYl5rvw",
    authDomain: "react-firebase-test-ee07c.firebaseapp.com",
    projectId: "react-firebase-test-ee07c",
    storageBucket: "react-firebase-test-ee07c.appspot.com",
    messagingSenderId: "329886367042",
    appId: "1:329886367042:web:322718167bb00bc2149cdb",
    measurementId: "G-3PKBBG0C7E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = new firebase.firestore();

export { firestore }