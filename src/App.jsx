import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Contact from "./pages/Contact";
// import ForgotPassword from "./pages/ForgotPassword";
import Jobs from "./pages/Jobs";
import JoinUs from "./pages/JoinUs";
// import JobDetails from "./pages/JobDetails";
import Services from "./pages/Services";
import JobSeekers from "./pages/JobSeekers";
import CareerTips from "./pages/CareerTips";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
// import Employers from "./pages/Employers";
// import Applications from "./pages/Applications";
// import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <NavBar />
      
      <main className="min-h-screen pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/join-us" element={<JoinUs />} />
          {/* <Route path="/job-details/:id" element={<JobDetails />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route path="/career-tips" element={<CareerTips />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* <Route path="/employers" element={<Employers />} />
          <Route path="/applications" element={<Applications />} /> */}
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
