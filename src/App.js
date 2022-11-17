import {useEffect} from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar';
import './App.css';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";

import VerifyOTP from "./Pages/VerifyOTP";
import { Amplify, Hub } from "aws-amplify";
import awsmobile from "./aws-exports";
import { AuthProvider } from "./Auth";


Amplify.configure(awsmobile);

function App() {
  useEffect(() => {
    //for running the script to toggle the the navbar
    const script = document.createElement('script');
    script.src = "script.js";
    script.async = true;

     
  
    document.body.appendChild(script);

  
  }, []);
  return (
    <>
      <Navbar />
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/OTPVerification" element={<VerifyOTP />} />
      </Routes>
      {/* </AuthProvider> */}
      <Footer />
    </>
  );
}

export default App;
