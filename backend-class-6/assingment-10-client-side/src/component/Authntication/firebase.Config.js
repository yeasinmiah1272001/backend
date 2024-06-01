// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YyrEgge66ffjWp1HuCgUdg_MymydtLw",
  authDomain: "car-doctor-practice-9032d.firebaseapp.com",
  projectId: "car-doctor-practice-9032d",
  storageBucket: "car-doctor-practice-9032d.appspot.com",
  messagingSenderId: "398179941935",
  appId: "1:398179941935:web:c7c9dd7651e8f856b110da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);