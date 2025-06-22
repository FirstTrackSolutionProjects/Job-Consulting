import React, { useState } from "react";


const HomeLoanForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
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
    income: "",
    location: "",
    propertyValue: "",
    loanAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Home Loan Application:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-l mx-auto bg-white p-6 rounded shadow space-y-4"
    >
     {/* Personal Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Details</h3>

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
            required
            className="p-2 border rounded"
          />

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
  {/* Email */}
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email"
    className="p-2 border rounded w-full"
    required
  />

  {/* Phone with STD */}
  <div className="grid grid-cols-4 gap-0 w-full">
    <select
      name="stdCode"
      value={formData.stdCode || '+91'}
      onChange={(e) => setFormData({ ...formData, stdCode: e.target.value })}
      className="border p-2 rounded-l text-sm bg-white col-span-1"
      required
    >
      <option value="+91">+91 🇮🇳</option>
    </select>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Phone Number"
      className="border p-2 rounded-r text-sm col-span-3"
      required
    />
  </div>
</div>

{/* DOB */}

  <input
    type="date"
    name="dob"
    value={formData.dob}
    onChange={handleChange}
    placeholder="dd-mm-yyyy"
    className="p-2 border rounded w-full"
    required
  />


{/* Gender */}

  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    className="p-2 border rounded w-full"
    required
  >
    <option value="">Select Gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>


        </div>

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

        <div className="mt-4">
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            placeholder="Permanent Address"
            className="w-full p-2 border rounded mb-2"
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
        <h3 className="text-xl font-semibold text-gray-700 mb-2">KYC Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            placeholder="Aadhaar Number"
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="PAN Number"
            required
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* Home Loan Details */}

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Home Details</h3>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Annual Income (₹)</label>
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          placeholder="Annual Income"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Property Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Property Location"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Property Value (₹)</label>
        <input
          type="number"
          name="propertyValue"
          value={formData.propertyValue}
          onChange={handleChange}
          placeholder="Property Value"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Loan Amount (₹)</label>
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          placeholder="Loan Amount"
          required
          className="w-full p-2 border rounded"
        />
      </div>

       {/* Document Upload */}
<div>
  <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Documents</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-gray-700 mb-1">Aadhaar Card (PDF/Image)</label>
      <input
        type="file"
        name="aadharFile"
        accept=".pdf,.jpg,.jpeg,.png"
        className="w-full p-2 border rounded"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1">PAN Card (PDF/Image)</label>
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

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </form>
  );
};

export default HomeLoanForm;
