import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Footer from './layout/Footer'
import CompareChallenges from "./pages/CompareChallenges";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import HowItWorksCards from './pages/HowItWorksCards';
import FAQ from './pages/FAQ';

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare-challenges" element={<CompareChallenges />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/how-it-works" element={<HowItWorksCards/>} />
        <Route path="/faq" element={<FAQ/>} />
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
