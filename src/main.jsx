import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './css/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7UNOWfaqASSlmGmkSGAu07NVelJ3NE2k",
  authDomain: "coderhouse-react-proyect.firebaseapp.com",
  projectId: "coderhouse-react-proyect",
  storageBucket: "coderhouse-react-proyect.appspot.com",
  messagingSenderId: "339523315575",
  appId: "1:339523315575:web:b90defbfa30f882b25a372"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
      <App />
)
