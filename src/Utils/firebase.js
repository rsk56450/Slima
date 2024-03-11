// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcwXDf35K9ywJmq1Fom6iuafzXd3DBMbU",
  authDomain: "clonepro-bfd94.firebaseapp.com",
  projectId: "clonepro-bfd94",
  storageBucket: "clonepro-bfd94.appspot.com",
  messagingSenderId: "163647594034",
  appId: "1:163647594034:web:5a4738353c05b00689262b",
  measurementId: "G-V7MFZF6LRH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
