// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgBFbITN29KmLu-AXEv_3Xr1mM12HovkA",
  authDomain: "mentorsgyan-51f21.firebaseapp.com",
  databaseURL: "https://mentorsgyan-51f21-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mentorsgyan-51f21",
  storageBucket: "mentorsgyan-51f21.appspot.com",
  messagingSenderId: "765534110167",
  appId: "1:765534110167:web:f5c0ee4536f9e5cd194b92",
  measurementId: "G-NNFL9F9QDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();