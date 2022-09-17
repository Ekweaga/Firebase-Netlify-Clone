// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvhJTrM_spjgdLFs_gEOZ7uf8HYdI5L5A",
  authDomain: "movieapp-7ef09.firebaseapp.com",
  projectId: "movieapp-7ef09",
  storageBucket: "movieapp-7ef09.appspot.com",
  messagingSenderId: "1076047091249",
  appId: "1:1076047091249:web:2fb31f073c781d68262710",
  measurementId: "G-JHPXG7EQHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectfirestore = getFirestore(app)
const projectstorage = getStorage(app);
const auth = getAuth(app)

export {projectstorage, projectfirestore,auth,app}