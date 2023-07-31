// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVJW4GEQ1-IP-b6fmNUnCRE-Klt2zWYLk",
  authDomain: "calendarise-b6b96.firebaseapp.com",
  projectId: "calendarise-b6b96",
  storageBucket: "calendarise-b6b96.appspot.com",
  messagingSenderId: "395726654346",
  appId: "1:395726654346:web:c201237d281ad11f381673",
  measurementId: "G-KTW6Q7VNWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
