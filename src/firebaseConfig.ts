
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_tc7WLRl_CXGE9CrM0BbSonM6Zs7WgSA",
  authDomain: "true-881e9.firebaseapp.com",
  projectId: "true-881e9",
  storageBucket: "true-881e9.firebasestorage.app",
  messagingSenderId: "1038094524140",
  appId: "1:1038094524140:web:657f849d8eb3aec0444fc9",
  measurementId: "G-Q2X2KP74S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore()
