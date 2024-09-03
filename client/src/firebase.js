// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-8fb6d.firebaseapp.com",
  projectId: "mern-auth-8fb6d",
  storageBucket: "mern-auth-8fb6d.appspot.com",
  messagingSenderId: "345158548124",
  appId: "1:345158548124:web:d26bea4d9c715f5e1b0b59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);