// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from 'dotenv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-55ac3.firebaseapp.com",
  projectId: "mern-blog-55ac3",
  storageBucket: "mern-blog-55ac3.appspot.com",
  messagingSenderId: "32499341243",
  appId: "1:32499341243:web:922656bc66ee45e1d6569e",
  measurementId: "G-KSP5SBTKXN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);