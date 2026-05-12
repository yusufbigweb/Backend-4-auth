import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNz4pyNC659RAtTSgze9IZhvi3gAIA3A0",
  authDomain: "backend-auth-ad110.firebaseapp.com",
  projectId: "backend-auth-ad110",
  storageBucket: "backend-auth-ad110.firebasestorage.app",
  messagingSenderId: "373545398536",
  appId: "1:373545398536:web:39879f953235fd3e597cbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
