import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7hjjzv1v9teFoId0fM7tKDr7APoFYgQs",
    authDomain: "clone-701dc.firebaseapp.com",
    databaseURL: "https://clone-701dc.firebaseio.com",
    projectId: "clone-701dc",
    storageBucket: "clone-701dc.appspot.com",
    messagingSenderId: "1060148415006",
    appId: "1:1060148415006:web:35fa7d5b0866c9674cfc0f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
