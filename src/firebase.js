import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC18DJp6-pmf2C0SxebWdO3wgkHdUlNsag",
  authDomain: "chat-5f7aa.firebaseapp.com",
  projectId: "chat-5f7aa",
  storageBucket: "chat-5f7aa.appspot.com",
  messagingSenderId: "970724827327",
  appId: "1:970724827327:web:8b955906c736d97c05260a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
