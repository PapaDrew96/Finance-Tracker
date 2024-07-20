// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ8Atyb_9ms8SfnmyQgsXrfo0jfE22a04",
  authDomain: "finance-tracker-97408.firebaseapp.com",
  projectId: "finance-tracker-97408",
  storageBucket: "finance-tracker-97408.appspot.com",
  messagingSenderId: "604961720231",
  appId: "1:604961720231:web:6dfd41edb8745ba529d882",
  measurementId: "G-J6PQCT3XZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
