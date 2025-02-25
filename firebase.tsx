// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  // @ts-ignore
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  // @ts-ignore
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  // @ts-ignore
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  // @ts-ignore
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINSENDERID,
  // @ts-ignore
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)