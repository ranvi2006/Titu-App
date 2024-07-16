// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBrFq-DxLFGlLHp9BxFMVlML7lNqrYu5cw",

  authDomain: "titu-fe64c.firebaseapp.com",

  projectId: "titu-fe64c",

  storageBucket: "titu-fe64c.appspot.com",

  messagingSenderId: "898364044244",

  appId: "1:898364044244:web:1bd049f9b89a7d81f7dc41",

  measurementId: "G-3EJY7CRJD7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth=getAuth();
export default auth;