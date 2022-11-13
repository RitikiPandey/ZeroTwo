import { Route, Routes } from "react-router-dom"

import Navbar from './Components/Navbar';
import './App.css';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Foot from "./Components/Foot";


function App() {
  return (
    <>
    <div className="cursor"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
