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
  apiKey: "AIzaSyAVZm998LQzbtJhMoIW8RKeFuGjtRRjGTk",
  authDomain: "netlify-8dd51.firebaseapp.com",
  projectId: "netlify-8dd51",
  storageBucket: "netlify-8dd51.appspot.com",
  messagingSenderId: "223116732587",
  appId: "1:223116732587:web:6d31a0bf920f64d28c2fee",
  measurementId: "G-EYE9H5HCNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectfirestore = getFirestore(app)
const projectstorage = getStorage(app);
const auth = getAuth(app)

export {projectstorage, projectfirestore,auth,app}