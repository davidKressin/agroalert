// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV2qi8nFUaH0hmLUfFR8S67Mlf8u9dtQs",
  authDomain: "sensorestid.firebaseapp.com",
  databaseURL: "https://sensorestid-default-rtdb.firebaseio.com",
  projectId: "sensorestid",
  storageBucket: "sensorestid.appspot.com",
  messagingSenderId: "213960222306",
  appId: "1:213960222306:web:7dfd31db974a0a3fc4933b",
  measurementId: "G-C8QV2NM0BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };