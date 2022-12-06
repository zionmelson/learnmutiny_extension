//deprecated

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAct2hlV6ytDksIhJ2WZGQTUNVq8sOoKew",
  authDomain: "learnmutiny-bc3c7.firebaseapp.com",
  projectId: "learnmutiny-bc3c7",
  storageBucket: "learnmutiny-bc3c7.appspot.com",
  messagingSenderId: "806431236426",
  appId: "1:806431236426:web:feab99e0c6382db13a21b3",
  measurementId: "G-LEMJSNV09M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
