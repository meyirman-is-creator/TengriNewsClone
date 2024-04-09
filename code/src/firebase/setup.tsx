import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFGepOADpL2gbvyfm7hhuQpLtWHfljzMQ",
  authDomain: "newyorktimes-2566e.firebaseapp.com",
  projectId: "newyorktimes-2566e",
  storageBucket: "newyorktimes-2566e.appspot.com",
  messagingSenderId: "48351580471",
  appId: "1:48351580471:web:62afe8af946f501a0f8ab2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const gitProvider = new GithubAuthProvider()