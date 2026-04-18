// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VIT_apiKey,
  authDomain: import.meta.env.VIT_authDomain,
  projectId: import.meta.env.VIT_projectId,
  storageBucket: import.meta.env.VIT_storageBucket,
  messagingSenderId: import.meta.env.VIT_messagingSenderId,
  appId: import.meta.env.VIT_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);