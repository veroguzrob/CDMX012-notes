import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAUe9vFK23UT5B1NfsHHG9rdO9TnERPwlA",
  authDomain: "pin-notes.firebaseapp.com",
  projectId: "pin-notes",
  storageBucket: "pin-notes.appspot.com",
  messagingSenderId: "290321780160",
  appId: "1:290321780160:web:df9a0e450c37d767934c25"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
