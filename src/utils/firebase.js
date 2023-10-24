import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBTKtFi0jPJXGNzXo7t29sVyjzjV0Q-Ges",
  authDomain: "chatapp-9495b.firebaseapp.com",
  projectId: "chatapp-9495b",
  storageBucket: "chatapp-9495b.appspot.com",
  messagingSenderId: "1049577793472",
  appId: "1:1049577793472:web:768c01957478c44b47ca25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)