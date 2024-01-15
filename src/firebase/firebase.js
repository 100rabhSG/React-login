// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxJOjJot1Clnat9QuqYVkXDHA7aAkKmHI",
  authDomain: "react-login-3d6a1.firebaseapp.com",
  projectId: "react-login-3d6a1",
  storageBucket: "react-login-3d6a1.appspot.com",
  messagingSenderId: "328477314493",
  appId: "1:328477314493:web:e7ed3b58ec5a9c11e916d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;