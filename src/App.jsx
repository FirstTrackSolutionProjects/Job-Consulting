import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Position from "./pages/Position";
import Contact from "./pages/Contact";

 import Career from "./pages/Career";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import CurrentOpening from "./pages/CurrentOpening";
import ApplyForm from "./pages/ApplyForm";


import JobSeekers from "./pages/JobSeekers";
import CareerTips from "./pages/CareerTips";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Partner from "./pages/Partner";
import Freelancer from "./pages/Freelancer";
import BusinessAssociate from "./pages/BusinessAssociate";
import Fintech from "./pages/FinTech";
import InsuranceForm from "./pages/InsuranceForm";
import CreditCard from "./pages/CreditCard";
import LoanPage from "./pages/Loan";
import LoanDetails from "./pages/LoanDetails";
 import LoanApply from "./pages/LoanApply";
import PersonalLoanForm from "./Forms/PersonalLoanForm";
import BusinessLoanForm from "./Forms/BusinessLoanForm";
import HomeLoanForm from "./Forms/HomeLoanForm";
import MortgageLoanForm from "./Forms/MortgageLoanForm";
import UsedCarLoanForm from "./Forms/UsedCarLoanForm";
import EducationLoanForm from "./Forms/EducationLoanForm";
import TractorLoanForm from "./Forms/TractorLoanForm";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <main className="min-h-screen pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/career" element={<Career />} />
          
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/current-openings" element={<CurrentOpening />} />
          <Route path="/apply-form/:id" element={<ApplyForm />} />
          
         
          <Route path="/position" element={<Position />} />
          
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route path="/career-tips" element={<CareerTips />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/partner/freelancer" element={<Freelancer />} />
          <Route path="/partner/business" element={<BusinessAssociate />} />
          <Route path="/fintech" element={<Fintech />} />
          <Route path="/insurance" element={<InsuranceForm />} />
          <Route path="/credit-card" element={<CreditCard />} />
          <Route path="/loan" element={<LoanPage />} />
          <Route path="/loan-details/:type" element={<LoanDetails />} />
          <Route path="/loan/apply" element={<LoanApply />} />
          <Route path="/loan/apply/personal" element={<PersonalLoanForm />} />
          <Route path="/loan/apply/business" element={<BusinessLoanForm />} />
          <Route path="/loan/apply/home" element={<HomeLoanForm />} />
          <Route path="/loan/apply/mortgage" element={<MortgageLoanForm />} />
          <Route path="/loan/apply/used-car" element={<UsedCarLoanForm />} />
          <Route path="/loan/apply/education" element={<EducationLoanForm />} />
          <Route path="/loan/apply/tractor" element={<TractorLoanForm />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
