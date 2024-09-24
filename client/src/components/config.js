// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "@firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZSCHWrgiuvAAuwwRxcM8bEzGPv2-a1oA",
  authDomain: "ecomm-b5184.firebaseapp.com",
  projectId: "ecomm-b5184",
  storageBucket: "ecomm-b5184.appspot.com",
  messagingSenderId: "1083837962824",
  appId: "1:1083837962824:web:5b38246e2bef1b9d61567d",
  measurementId: "G-NDK2WHLEH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app)