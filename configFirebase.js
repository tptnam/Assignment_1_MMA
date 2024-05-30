// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFyo0-dOHarL3EGdNX5THiVD3eBozk1o4",
  authDomain: "assignment2-mma301.firebaseapp.com",
  databaseURL:
    "https://assignment2-mma301-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "assignment2-mma301",
  storageBucket: "assignment2-mma301.appspot.com",
  messagingSenderId: "665016221180",
  appId: "1:665016221180:web:dc7d51cd6d024a16234679",
  measurementId: "G-W7F1GTGXY9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
