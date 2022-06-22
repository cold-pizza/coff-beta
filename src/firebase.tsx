import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlQ4rWbUl-I8tSSbwDFvm_Dtb7cw__6XE",
    authDomain: "coff-beta.firebaseapp.com",
    projectId: "coff-beta",
    storageBucket: "coff-beta.appspot.com",
    messagingSenderId: "876291343088",
    appId: "1:876291343088:web:f591f95865363328fa7835",
    measurementId: "G-5RD21FPGMV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
