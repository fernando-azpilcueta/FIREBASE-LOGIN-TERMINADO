// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js" 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVwY9ZyTt37Hp6Df28ADklOK0I4wUY-6Q",
  authDomain: "fir-app-prueba-62edb.firebaseapp.com",
  projectId: "fir-app-prueba-62edb",
  storageBucket: "fir-app-prueba-62edb.appspot.com",
  messagingSenderId: "19834426313",
  appId: "1:19834426313:web:ffb1179653cd6aa8934e18",
  measurementId: "G-23DWELCXFX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
//export const analytics = getAnalytics(app);