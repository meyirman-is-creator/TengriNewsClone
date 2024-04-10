import React, { useState } from "react";
import facebook from "../img/facebook.png";
import google from "../img/google.png";
import github from "../img/github.png";
import tengrinewsIcon from "../img/tengrinews.svg";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, gitProvider, googleProvider } from "../firebase/setup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('LoggedIn successfully')
      setTimeout(()=>{
        navigate("/")
      },2000  )
    } catch (err) {
      console.log(err);
      const error:any =err
      toast.error(error);
    }
  };
  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('LoggedIn successfully')
      setTimeout(()=>{
        navigate("/")
      },2000  )
    } catch (err) {
      console.error(err);
      const error:any =err
      toast.error(error);

    }
  };
  const githubLogin = async () => {
    try {
      await signInWithPopup(auth, gitProvider);
      toast.success('LoggedIn successfully')
      setTimeout(()=>{
        navigate("/")
      },2000  ) 
    } catch (err) {
      console.error(err);
      const error:any =err
      toast.error(error);
    }
  };
  return (
    <>
    <ToastContainer autoClose={3000}/>
      <div>
        <div className="shadow-md p-4 pl-96">
          <img src={tengrinewsIcon} alt="" className="w-52" />
        </div>
        <div className="ml-96 mt-24">
          <h1 className="text-gray-700 font-medium text-3xl ml-12">
            Log in or create an account
          </h1>
          <br />
          <label className="font-bold text-base">Email Address</label>
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-6/12 border border-black p-2 "
          />
          <br />
          <label className="font-bold text-base">Password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-6/12 border border-black p-2 "
          />
          <br />
          <button
            onClick={emailLogin}
            className="bg-black text-white w-6/12 mt-4 p-2 font-semibold"
          >
            Create Account
          </button>
          <h1 className="ml-52">or</h1>
          <h1 className="mt-4 ">
            By continuing, you agree to the Terms of Sale, Terms of <br />
            Service, and Privacy Policy.
          </h1>
          <div
            onClick={googleLogin}
            className="border border-black w-6/12 p-2  flex items-center mt-4 cursor-pointer"
          >
            <img alt="" src={google} className="w-4 h-4 ml-32" />
            <h1 className="font-bold ml-4">Continue with Google</h1>
          </div>
          {/* <div className="border border-black w-6/12 p-2  flex items-center mt-4">
          <img alt="" src={facebook} className="w-4 h-4 ml-32" />
          <h1 className="font-bold ml-4">Continue with Facebook</h1>
        </div> */}
          <div
            onClick={githubLogin}
            className="border border-black w-6/12 p-2  flex items-center mt-4 cursor-pointer"
          >
            <img alt="" src={github} className="w-4 h-4 ml-32" />
            <h1 className="font-bold ml-4">Continue with Github</h1>
          </div>
        </div>
      </div>
    </>
  );
} //08:38
