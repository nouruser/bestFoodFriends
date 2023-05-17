import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB82uyAo-gG52ohYOhtkrSgMpA1XfSjFTg",
  authDomain: "bestfoodfriends-872ab.firebaseapp.com",
  projectId: "bestfoodfriends-872ab",
  storageBucket: "bestfoodfriends-872ab.appspot.com",
  messagingSenderId: "691976381112",
  appId: "1:691976381112:web:926e2eee4b005958158a4d",
  measurementId: "G-1DGTK3Y0CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
