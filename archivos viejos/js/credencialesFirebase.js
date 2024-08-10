// Aquí vas a poner tus credenciales de Firebase

// El ejemplo de las credenciales del profe. Llenar con sus credenciales

// const firebaseConfig = {
//     apiKey: "AIzaSyAe6A3fntQHNsrgL-FyRpOYpwHxSMenqtM",
//     authDomain: "react-flex-57915.firebaseapp.com",
//     projectId: "react-flex-57915",
//     storageBucket: "react-flex-57915.appspot.com",
//     messagingSenderId: "660644246128",
//     appId: "1:660644246128:web:3a2ae27750707f4b5cbab5"
// };

const firebaseConfig = {
    apiKey: "AIzaSyA7UNOWfaqASSlmGmkSGAu07NVelJ3NE2k",
    authDomain: "coderhouse-react-proyect.firebaseapp.com",
    projectId: "coderhouse-react-proyect",
    storageBucket: "coderhouse-react-proyect.appspot.com",
    messagingSenderId: "339523315575",
    appId: "1:339523315575:web:b90defbfa30f882b25a372"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();
