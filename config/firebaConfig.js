// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyDwVOkA0A-Z2xFCo_AhD_CP6cZRpRobA",
  authDomain: "listaprueba-7203a.firebaseapp.com",
  projectId: "listaprueba-7203a",
  storageBucket: "listaprueba-7203a.appspot.com",
  messagingSenderId: "1040638743466",
  appId: "1:1040638743466:web:f983116c23aca8966e51d3",
  measurementId: "G-XH2TC52FD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);