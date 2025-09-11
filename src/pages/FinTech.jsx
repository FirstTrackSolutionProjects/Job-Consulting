import React, { useState } from "react";
import CreditCard from "./CreditCard";
import {Helmet }from "react-helmet"
const Fintech = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    loanAmount: "",
    loanType: "Personal Loan",
    income: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Loan application submitted!");
    // Add API integration here
  };

  return (
    <>
   
      <Helmet>
        <title>Fintech | FTST </title>
        <meta
          name="description"
          content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
        />
        </Helmet>
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md mt-12">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
        Apply for a Loan
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Email *</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Mobile Number *</label>
          <div className="flex gap-2">
            <select
                name="countryCode"
                required
                onChange={handleChange}
                className="border px-3 py-2 rounded w-28"
            >
                <option value="+91">+91 🇮🇳</option>
                <option value="+1">+1 🇺🇸</option>
                <option value="+44">+44 🇬🇧</option>
                <option value="+61">+61 🇦🇺</option>
            {/* Add more as needed */}
            </select>
   
          <input
            type="tel"
            name="mobile"
            required
            pattern="[0-9]{10}"
            placeholder="1234567890"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
            </div>

        <div>
          <label className="block font-medium">Loan Type *</label>
          <select
            name="loanType"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option>Personal Loan</option>
            <option>Home Loan</option>
            <option>Car Loan</option>
            <option>Business Loan</option>
            <option>Education Loan</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Loan Amount (₹) *</label>
          <input
            type="number"
            name="loanAmount"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Monthly Income (₹) *</label>
          <input
            type="number"
            name="income"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Upload Document (optional)</label>
          <div className="relative border border-gray-600 rounded overflow-hidden flex items-center">
          <input
            type="file"
            name="document"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full px-3 py-2 text-sm text-gray-700 cursor-pointer"
          />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
    </>
  );
};

export default Fintech;
