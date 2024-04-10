import React, {useEffect} from "react";
import './App.css'
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();

  return (
  <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path='/details' element={<Details/>}></Route>
    </Routes>
  </>
  )
}

export default App;
