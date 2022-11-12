import { Route, Routes } from "react-router-dom"

import Navbar from './Components/Navbar';
import './App.css';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <div className="cursor"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
