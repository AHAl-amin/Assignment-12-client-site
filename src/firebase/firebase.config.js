// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCneMbfBKRkLKjVJUnm-2091lJ93Ua92gY",
  authDomain: "fitnesspal-assignment.firebaseapp.com",
  projectId: "fitnesspal-assignment",
  storageBucket: "fitnesspal-assignment.appspot.com",
  messagingSenderId: "378727327997",
  appId: "1:378727327997:web:55afbecabf8a411b0f7694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;