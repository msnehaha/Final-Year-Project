// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpzJz5PTkj88jjS3QhsLoKC3_UWhuEAhc",
  authDomain: "project-work-fyp.firebaseapp.com",
  projectId: "project-work-fyp",
  storageBucket: "project-work-fyp.appspot.com",
  messagingSenderId: "893762964518",
  appId: "1:893762964518:web:bfc60c3567e6a9132aeae7",
  measurementId: "G-RDFZLPXKSQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
