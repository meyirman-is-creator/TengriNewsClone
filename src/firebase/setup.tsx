import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa6AHAZLRib7IejqaIHK3m2_kJBiiG8QE",
  authDomain: "tengrinews.firebaseapp.com",
  projectId: "tengrinews",
  storageBucket: "tengrinews.appspot.com",
  messagingSenderId: "298436898790",
  appId: "1:298436898790:web:fd8fcdf9dafad3091ff027"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const gitProvider = new GithubAuthProvider()