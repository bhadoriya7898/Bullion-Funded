import ScrollToTop from "./layout/ScrollToTop";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

import Home from "./pages/Home";
import CompareChallenges from "./pages/CompareChallenges";
import Contact from "./pages/Contact";
import HowItWorksCards from "./pages/HowItWorksCards";
import FAQ from "./pages/FAQ";
import XChallenge from "./pages/XChallenge";
import Evaluation from "./pages/Evaluation";
import Express from "./pages/Express";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* MAIN WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/compare-challenges" element={<CompareChallenges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorksCards />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/x-challenge" element={<XChallenge />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/express" element={<Express />} />
        </Route>

        {/* AUTH PAGES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
