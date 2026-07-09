// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjP_vNpYmLUobXOgTelbVQi06QRzA0YLw",
  authDomain: "netflixgpt-c6349.firebaseapp.com",
  projectId: "netflixgpt-c6349",
  storageBucket: "netflixgpt-c6349.firebasestorage.app",
  messagingSenderId: "225385374920",
  appId: "1:225385374920:web:e4d6f7dbd27795a52af1fd",
  measurementId: "G-HHEZ43CLRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();