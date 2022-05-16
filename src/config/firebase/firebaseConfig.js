// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdgnV6R5DezuFD1WXtUa2x0R9CRdcz-9c",
  authDomain: "challenge-6-8a399.firebaseapp.com",
  projectId: "challenge-6-8a399",
  storageBucket: "challenge-6-8a399.appspot.com",
  messagingSenderId: "965727082296",
  appId: "1:965727082296:web:750c2e6a6ebf4fd9ca93cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);



