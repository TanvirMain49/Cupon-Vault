// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDazdD5yFzAQiT2iMwvVHpzmD68A8Mxhnk",
  authDomain: "coupon-vault.firebaseapp.com",
  projectId: "coupon-vault",
  storageBucket: "coupon-vault.firebasestorage.app",
  messagingSenderId: "757764889581",
  appId: "1:757764889581:web:fb0f363891fa2970d165e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;