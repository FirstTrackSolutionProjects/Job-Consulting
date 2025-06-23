import React, { useState } from "react";

const UsedCarLoanForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    stdCode: "+91",
    phone: "",
    dob: "",
    gender: "",
    fatherName: "",
    motherName: "",
    state: "",
    city: "",
    pincode: "",
    permanentAddress: "",
    currentAddress: "",
    aadhar: "",
    pan: "",
    carModel: "",
    carYear: "",
    carPrice: "",
    loanAmount: "",
     accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
  });

   const handleSameAddress = (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    setFormData((prev) => ({
      ...prev,
      currentAddress: prev.permanentAddress,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      currentAddress: "",
    }));
  }
};

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Used Car Loan Application:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-white p-6 rounded shadow space-y-6"
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Personal Details
        </h3>

        {/* Title, Full Name, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
          </select>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded"
            required
          />
        </div>

            {/* Phone, DOB, Gender */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Phone Number with STD Code */}
          <div className="flex items-stretch gap-2">
            <select
              name="stdCode"
              value={formData.stdCode}
              onChange={handleChange}
              className="border p-2 rounded w-24 text-sm bg-white"
            >
              <option value="+91">+91 🇮🇳</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="border p-2 rounded w-full"
              required
            />
          </div>

          {/* Date of Birth */}
          <input
          type="text"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="dd-mm-yyyy"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
          className="p-2 border rounded"
          required
        />


          {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          
          </select>
        </div>


        {/* Father's & Mother's Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            placeholder="Mother's Name"
            className="p-2 border rounded"
            required
          />
        </div>

        {/* State, City, Pincode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="p-2 border rounded"
            required
          />
        </div>

        {/* Permanent & Current Address */}
        <div className="mt-4 space-y-4">
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            placeholder="Permanent Address"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            placeholder="Current Address"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* KYC Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          KYC Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            placeholder="Aadhaar Card Number"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="PAN Card Number"
            className="p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Car Loan Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Car Loan Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            placeholder="Car Model"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="carYear"
            value={formData.carYear}
            onChange={handleChange}
            placeholder="Car Year"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="carPrice"
            value={formData.carPrice}
            onChange={handleChange}
            placeholder="Car Price (₹)"
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="mt-4">
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            placeholder="Loan Amount (₹)"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

         {/* Bank Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} placeholder="Account Holder Name" className="p-2 border rounded" required />
          <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" className="p-2 border rounded" required />
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="p-2 border rounded" required />
          <input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} placeholder="IFSC Code" className="p-2 border rounded" required />
        </div>

        <label className="block mt-4 mb-1">Upload Cancelled Cheque / Passbook</label>
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
      </div>

      {/* Document Upload */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Upload Documents
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
             <label className="block text-gray-700 mb-1">Your Photo (Passport Size)</label>
              <input
                type="file"
                name="photo"
                accept=".jpg,.jpeg,.png"
                className="w-full p-2 border rounded"
                required
              />

            <label className="block text-gray-700 mb-1">
              Aadhaar Card (PDF/Image)
            </label>
            <input
              type="file"
              name="aadharFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              PAN Card (PDF/Image)
            </label>
            <input
              type="file"
              name="panFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </form>
  );
};

export default UsedCarLoanForm;
