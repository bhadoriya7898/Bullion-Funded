import ScrollToTop from "./layout/ScrollToTop";
import "./App.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import CompareChallenges from "./pages/CompareChallenges";
import Contact from "./pages/Contact";
import HowItWorksCards from "./pages/HowItWorksCards";
import FAQ from "./pages/FAQ";
import {Routes, Route } from "react-router-dom";
import XChallenge from "./pages/XChallenge";
import Evaluation from "./pages/Evaluation";
import Express from "./pages/Express";
function App() {
  return (
    <>
      <ScrollToTop />  

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare-challenges" element={<CompareChallenges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorksCards />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/x-challenge" element= {<XChallenge/>}/>
        <Route path="/Evaluation" element={<Evaluation/>}/>
        <Route path="/Express" element={<Express/>}/>
      </Routes>

      <Footer />
    </>
  );
}
export default App;