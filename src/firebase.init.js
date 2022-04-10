// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKG67WP7Lxx5_sTu0fGJcfiY9EP7sFGMs",
  authDomain: "ema-jhon-with-privateroute.firebaseapp.com",
  projectId: "ema-jhon-with-privateroute",
  storageBucket: "ema-jhon-with-privateroute.appspot.com",
  messagingSenderId: "195796808267",
  appId: "1:195796808267:web:653513990e7598642d93ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 

export default auth;