// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWa_7OQl5v6uX8UGrhD5i-qq5dBGeuT-o",
  authDomain: "react-3-45138.firebaseapp.com",
  projectId: "react-3-45138",
  storageBucket: "react-3-45138.firebasestorage.app",
  messagingSenderId: "186202879288",
  appId: "1:186202879288:web:47b78559044f66f7c13dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);