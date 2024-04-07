// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqlSHj-xPv6SvoLk5VpoeYI9pkRANQVCQ",
  authDomain: "netflixgpt-ae689.firebaseapp.com",
  projectId: "netflixgpt-ae689",
  storageBucket: "netflixgpt-ae689.appspot.com",
  messagingSenderId: "253833187646",
  appId: "1:253833187646:web:0c73107342a0eea8dd9c6f",
  measurementId: "G-0N5Q33ZL4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
