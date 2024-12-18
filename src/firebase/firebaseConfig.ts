import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwC3G7eqyjpKUbT8trT77FmxQ5pb3gsDE",
  authDomain: "fintrack-fcf0d.firebaseapp.com",
  projectId: "fintrack-fcf0d",
  storageBucket: "fintrack-fcf0d.firebasestorage.app",
  messagingSenderId: "569724888390",
  appId: "1:569724888390:web:27a31b02915b6f5b193147",
  measurementId: "G-3TRHL73NDC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
