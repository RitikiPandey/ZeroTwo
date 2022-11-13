import {useEffect} from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar';
import './App.css';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Login from "./Pages/Login";



function App() {
  useEffect(() => {
    //for running the script to toggle the the navbar
    const script = document.createElement('script');
    script.src = "script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
