// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBhm6atI9yyNG_v-kZve229jhm0aaAEE2g",

  authDomain: "rockarg-react-cdh.firebaseapp.com",

  projectId: "rockarg-react-cdh",

  storageBucket: "rockarg-react-cdh.appspot.com",

  messagingSenderId: "708979900124",

  appId: "1:708979900124:web:781d92bde5561b9a92fe19"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);