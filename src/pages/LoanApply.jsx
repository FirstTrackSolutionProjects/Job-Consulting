import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const LoanApply = () => {
  const location = useLocation();
  const loanType = location.state?.loanType || "Loan";

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    aadhaar: "",
    pan: "",
    income: "",
    employer: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
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
    console.log("Loan Form Data:", formData);
    alert(`${loanType} Loan Application Submitted!`);
    // API call logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        {loanType} Application Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Personal Details</h3>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full border p-2 rounded mb-3" />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full border p-2 rounded mb-3" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full border p-2 rounded mb-3" />
         <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">+91</span>
            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border p-2 pl-14 rounded"
            />
            </div>

        </div>

        {/* KYC Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">2. KYC Details</h3>
          <input type="text" name="aadhaar" placeholder="Aadhaar Number" value={formData.aadhaar} onChange={handleChange} required className="w-full border p-2 rounded mb-3" />
          <input type="text" name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        {/* Income Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">3. Income Details</h3>
          <input type="text" name="employer" placeholder="Employer / Business Name" value={formData.employer} onChange={handleChange} className="w-full border p-2 rounded mb-3" />
          <input type="number" name="income" placeholder="Monthly Income (₹)" value={formData.income} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        {/* Bank Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">4. Bank Details</h3>
          <input type="text" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} required className="w-full border p-2 rounded mb-3" />
          <input type="text" name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} required className="w-full border p-2 rounded mb-3" />
          <input type="text" name="ifsc" placeholder="IFSC Code" value={formData.ifsc} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        {/* Document Upload */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">5. Upload Documents</h3>
          <label className="block mb-2 font-medium text-gray-700">
            Upload Aadhaar, PAN, Income Proof (PDF or Image)
          </label>
          <input type="file" name="document" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanApply;
