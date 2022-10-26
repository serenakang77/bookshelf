// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCwJ30GZfuvwP-E8DkrfU9dn-0Yv0BuYSs",
  authDomain: "serena-bookshelf-app.firebaseapp.com",
  projectId: "serena-bookshelf-app",
  storageBucket: "serena-bookshelf-app.appspot.com",
  messagingSenderId: "930204289326",
  appId: "1:930204289326:web:8ffb16dc045a56e28e52bf",
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export default app;