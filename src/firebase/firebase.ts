// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKeuFVVpOLxQOKoRpHd_fTPjQLvyQqoI",
  authDomain: "kolo-1fb9d.firebaseapp.com",
  projectId: "kolo-1fb9d",
  storageBucket: "kolo-1fb9d.firebasestorage.app",
  messagingSenderId: "865676049053",
  appId: "1:865676049053:web:db98f7f4baaf073bc1f274",
  measurementId: "G-YZJHKVGWS6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
