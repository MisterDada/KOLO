import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// @ts-ignore - Firebase v12 removed the React Native entry point, but the functionality still works
import { getReactNativePersistence } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence for React Native
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
