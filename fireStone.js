// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Utb2EazZG9Zq2FvsmTzLsNQxjN9VUCk",
  authDomain: "staybook-860a4.firebaseapp.com",
  projectId: "staybook-860a4",
  storageBucket: "staybook-860a4.appspot.com",
  messagingSenderId: "396097843880",
  appId: "1:396097843880:web:c5cd070e3b28883522089d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
