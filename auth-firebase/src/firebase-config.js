import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQdPQmLhHNL6uith60VM_3wFAh0ci03Do",
    authDomain: "job-interview-app-29b71.firebaseapp.com",
    projectId: "job-interview-app-29b71",
    storageBucket: "job-interview-app-29b71.appspot.com",
    messagingSenderId: "274640279522",
    appId: "1:274640279522:web:e6e6c4a69d99fb69844bbb",
    measurementId: "G-RY91XJ1Y81"
  };

  const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)