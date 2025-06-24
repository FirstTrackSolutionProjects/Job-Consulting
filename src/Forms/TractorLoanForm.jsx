import React, { useState } from "react";


const TractorLoanForm = () => {
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
    tractorModel: "",
    tractorPrice: "",
    landSize: "",
    loanAmount: "",
     accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    purpose: "",
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tractor Loan Application:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-l mx-auto bg-white p-6 rounded shadow space-y-4"
    >
       {/* Personal Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select name="title" value={formData.title} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Select Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
          </select>

          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="p-2 border rounded" required />

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="flex gap-2">
            <select name="stdCode" value={formData.stdCode} onChange={handleChange} className="p-2 border rounded w-1/3">
              <option value="+91">+91 🇮🇳</option>
            </select>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-2 border rounded w-full" required />
          </div>

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


          <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

      
      </div>

      {/* Address Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Present Address Details</h3>

         <select residence="residence" value={formData.residence} onChange={handleChange} className="w-full p-2 border rounded mb-2" required>
          <option value="">Residence Type</option>
          <option>Own</option>
          <option>Rented</option>
         </select>

        <input type="text" name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Current Address" className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark" className="w-full p-2 border rounded mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="p-2 border rounded" required />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="p-2 border rounded" required />
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="p-2 border rounded" required />
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="p-2 border rounded" required />
        </div>

        <label className="flex items-center gap-2 mb-2">
          <input type="checkbox" onChange={handleSameAddress} />
          Same as Present Address
        </label>

        <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Permanent Address" className="w-full p-2 border rounded" required />
      </div>

      {/* Family Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's Name" className="p-2 border rounded" required />
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother's Name" className="p-2 border rounded" required />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Marital Status</option>
            <option>Unmarried</option>
            <option>Married</option>
            <option>Single</option>
          </select>

          {formData.maritalStatus === "Married" && (
            <>
              <input type="text" name="spouseName" value={formData.spouseName} onChange={handleChange} placeholder="Spouse Name" className="p-2 border rounded" />
              <input type="number" name="childrenCount" value={formData.childrenCount} onChange={handleChange} placeholder="Children" className="p-2 border rounded" />
            </>
          )}
        </div>
      </div>

      {/* KYC Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">KYC Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhaar Number" className="p-2 border rounded" required />
          <input type="text" name="pan" value={formData.pan} onChange={handleChange} placeholder="PAN Number" className="p-2 border rounded" required />
        </div>
      </div>

      {/* Loan Details */}

        <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">loan Details</h3></div>
      <div>
        <label className="block text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Tractor Brand/Model</label>
        <input
          type="text"
          name="tractorModel"
          value={formData.tractorModel}
          onChange={handleChange}
          placeholder="Brand / Model"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Tractor Price (₹)</label>
        <input
          type="number"
          name="tractorPrice"
          value={formData.tractorPrice}
          onChange={handleChange}
          placeholder="Tractor Price"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Farming Land Size (acres)</label>
        <input
          type="text"
          name="landSize"
          value={formData.landSize}
          onChange={handleChange}
          placeholder="Farming Land Size"
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

       {/*Purpose of Loan */}
            <div className="mb-4">
            <label className="block font-medium mb-2">Purpose of Loan *</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Enter purpose of the loan"
              className="w-full p-2 border rounded"
              required
            />
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
  <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Documents</h3>

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

export default TractorLoanForm;
