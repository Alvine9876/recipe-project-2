// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5q3johg0TcR-U7lRkZugf5h9j9kzYcJE",
  authDomain: "b-recipe-2.firebaseapp.com",
  projectId: "b-recipe-2",
  storageBucket: "b-recipe-2.firebasestorage.app",
  messagingSenderId: "835256634181",
  appId: "1:835256634181:web:0dc12a815f56cd28c2cc2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth};