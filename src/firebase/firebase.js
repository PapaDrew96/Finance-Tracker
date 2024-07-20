// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "finance-tracker-97408.firebaseapp.com",
  projectId: "finance-tracker-97408",
  storageBucket: "finance-tracker-97408.appspot.com",
  messagingSenderId: "604961720231",
  appId: "1:604961720231:web:6dfd41edb8745ba529d882",
  measurementId: "G-J6PQCT3XZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
