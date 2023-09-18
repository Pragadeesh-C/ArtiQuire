// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7TiDt34vKKT7lVNoFLXMGh-Sg40RJWdE",
  authDomain: "artiquire.firebaseapp.com",
  projectId: "artiquire",
  storageBucket: "artiquire.appspot.com",
  messagingSenderId: "358092219436",
  appId: "1:358092219436:web:e373e14a62725c54f45d89"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);