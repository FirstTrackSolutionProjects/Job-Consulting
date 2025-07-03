import React, { useState } from "react";

const BusinessAssociate = () => {
   const [sameAddress, setSameAddress] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    fullname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    stdCode: "+91",
    altStdCode: "+91",
    altPhone: "",
    residence: "",
    presentAddress: "",
    permanentAddress: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    spouseName: "",
    childrenCount: "",
    aadhar: "",
    pan: "",
    interestedField: "",
    organisationType: "",
    industry: "",
    businessName: "",
    businessType: "",
    businessAddress: "",
    turnover: "",
    experience: "",
    loanAmount: "",
    proposal: "",
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    bankProof: "",
    cancelledCheque: "",
    photo: "",
    officePhotos: [],
    aadharFile: "",
    panFile: "",
    gst: "",
    msme: "",
    rentAgreement: "",
    electricityBill: "",
    cin: "",
    companyPan: "",
    companyTan: "",
    tradeLicense: "",
    foodLicense: "",
    drugLicense: "",
    deedagreement: "",
    itr1: "",
    itr2: "",
    itr3: "",
    computation1: "",
    computation2: "",
    computation3: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

   const handleSameAddress = (e) => {
    const isChecked = e.target.checked;
    setSameAddress(isChecked);
    setFormData((prev) => ({
      ...prev,
      presentAddress: isChecked ? prev.permanentAddress : prev.presentAddress,
      permanentAddress: isChecked ? prev.presentAddress : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Business Associate Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
        Business Associate Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/Partners/business-associate.jpg"
            alt="partner"
            className="w-full h-96 object-cover lg:h-auto"
          />
          </div>

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
          {/* phone number */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="flex gap-2">
            <select name="stdCode" value={formData.stdCode} onChange={handleChange} className="p-2 border rounded w-1/3">
              <option value="+91">+91 🇮🇳</option>
            </select>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-2 border rounded w-full" required />
          </div>

          {/* Alternate Phone Number */}
        <div className="flex gap-2">
          <select
            name="altStdCode"
            value={formData.altStdCode}
            onChange={handleChange}
            className="p-2 border rounded w-1/3"
          >
            <option value="+91">+91 🇮🇳</option>
            <option value="+1">+1 🇺🇸</option>
            <option value="+44">+44 🇬🇧</option>
          </select>
          <input
            type="tel"
            name="altPhone"
            value={formData.altPhone}
            onChange={handleChange}
            placeholder="Alternate Number"
            className="p-2 border rounded w-full"
          />
        </div>

          {/* dob */}
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

        <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder="Present Address" className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark" className="w-full p-2 border rounded mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="p-2 border rounded" required />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="p-2 border rounded" required />
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="p-2 border rounded" required />
         <select name="country" value={formData.country} onChange={handleChange} className="p-2 border rounded" required>
          <option value="">Select Country</option>
          <option value="India">India</option>
          
        </select>

        </div>

        <label className="flex items-center gap-2 mb-2">
            <input type="checkbox" checked={sameAddress} onChange={handleSameAddress} />
            Same as Present Address
          </label>

          {!sameAddress && (
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Permanent Address"
              className="w-full p-2 border rounded"
              required
            />
          )}
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

       {/* Interested Field */}
        <div>
          <label className="block font-medium mb-1">Interested Field</label>
          <select
            name="interestedField"
            value={formData.interestedField}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select a Field</option>
            <option value="HR">HR Recruitment</option>
            <option value="Fintech">Fintech</option>
            <option value="IT Consulting">IT Consulting</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        {/* Business Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Details</h3>

         {/* Organization Type */}
          <label className="block mb-2 font-medium">Organization Type</label>
          <select
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            className="w-full border px-3 py-2 mb-4"
          >
            <option value="">Select Organization Type</option>
            <option value="proprietor">Proprietor</option>
            <option value="partnership">Partnership</option>
            <option value="private_limited">Private Limited</option>
            <option value="public_limited">Public Limited</option>
            <option value="other">Other</option>
          </select>

          {/* Industry */}
        <div>
          <label className="block font-medium mb-1">Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="e.g., IT, Education, Healthcare"
            className="w-full border p-2 rounded"
          />
        </div>

         {/* Business Name */}
          <div>
            <label className="block font-medium mb-1 mt-3">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              required
              className="w-full p-2 border rounded mb-4"
            />
          </div>
      {/* Business Type (Owned / Rented) */}
        <div>
          <label className="block font-medium mb-1"> Business Type</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          >
            <option value="">Select Business Type</option>
            <option value="Owned">Owned</option>
            <option value="Rented">Rented</option>
          </select>
        </div>

      {/* Business Address */}
      <div>
        <label className="block text-gray-700 mb-1 font-bold">Business Address</label>
        <input
          type="text"
          name="businessAddress"
          value={formData.businessAddress || ""}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input 
          type="text"
          name="landmark"
          value={formData.landmark || ""}
          onChange={handleChange}
          placeholder="Landmark"
          className="w-full p-2 border rounded mb-2"
          required
        />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <input
          type="text"
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
          placeholder="City"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="pincode"
          value={formData.pincode || ""}
          onChange={handleChange}
          placeholder="Pincode"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="state"
          value={formData.state || ""}
          onChange={handleChange}
          placeholder="State"
          className="p-2 border rounded"
          required
        />
     
        <select
          name="country"
          value={formData.country || ""}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
        </select>
      </div>
    </div>

     {/* Turnover */}
    <div>
      <label className="block font-medium mb-1 mt-3">Annual Turnover (₹)</label>
      <input
        type="number"
        name="turnover"
        value={formData.turnover}
        onChange={handleChange}
        placeholder="Annual Turnover"
        required
        className="w-full p-2 border rounded mb-3"
      />
    </div>

        {/* Experience */}
        <div>
          <label className="block font-medium mb-1">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="experience in years"
            className="w-full border p-2 rounded"
          />
        </div>
        </div>

        {/* Loan Amount */}
    <div>
      <label className="block font-medium mb-1">Loan Amount (₹)</label>
      <input
        type="number"
        name="loanAmount"
        value={formData.loanAmount}
        onChange={handleChange}
        placeholder="Loan Amount"
        required
        className="w-full p-2 border rounded mb-3"
      />
    </div>

        {/* Upload Visiting Card / Proposal */}
        <div>
          <label className="block font-medium mb-1">Upload Visiting Card / Proposal</label>
          <input
            type="file"
            name="proposal"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full border p-2 rounded"
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

        <label className="block mt-4 mb-1 font-medium">Bank Statement(1 Year)</label>
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
        <label className="block mt-4 font-medium">Cancelled Cheque</label>
        <input type="file" name="cancelledCheque" accept=".jpg,.jpeg,.png" className="w-full p-2 border rounded mt-2" required />
      </div>

           {/* upload documents */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Upload Documents</h3>

        {/* Personal Photo */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Your Photo (Passport Size)</label>
          <input
            type="file"
            name="photo"
            accept=".jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Office Photos */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Office Photos (Upload 4)</label>
          <input
            type="file"
            name="officePhotos"
            accept=".jpg,.jpeg,.png"
            multiple
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Identity Proof */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">Aadhaar Card (PDF/Image)</label>
            <input
              type="file"
              name="aadharFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">PAN Card (PDF/Image)</label>
            <input
              type="file"
              name="panFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Business Proof */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">GST Certificate (if available)</label>
            <input
              type="file"
              name="gst"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">MSME / Udyam Certificate</label>
            <input
              type="file"
              name="msme"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
            />
          </div>
          
          {formData.businessType === "Rented" && (
          <div>
            <label className="block font-medium mb-1">Rent Agreement</label>
            <input
              type="file"
              name="rentAgreement"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
            />
          </div>
          )}

          <div>
            <label className="block font-medium mb-1">Electricity Bill</label>
            <input
              type="file"
              name="electricityBill"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">
              Company Identification Number (CIN)
              <span className="text-xs text-gray-500"> (Corporate Identity Number)</span>
            </label>
            <input
              type="file"
              name="cin"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
            />
            </div>

            <div>
              <label className="block font-medium mb-1">Company PAN </label>
              <input
                type="file"
                name="companyPan"
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Company TAN </label>
              <input
                type="file"
                name="companyTan"
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

      {/* Trade Licenses (if applicable) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block font-medium mb-1">Trade License</label>
          <input
            type="file"
            name="tradeLicense"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Food License (FSSAI)</label>
          <input
            type="file"
            name="foodLicense"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Drug License</label>
          <input
            type="file"
            name="drugLicense"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

       {/* Show deed agreement Only if organizationtype is partnership */}
        <div>
      {formData.organizationType === "partnership" && (
        <label className="block text-gray-900 mb-1 mt-4 font-semibold">
         Partnership Deed
          <input
            type="file"
            name="deedagreement"
            accept=".pdf"
            onChange={handleChange}
            className="w-full border p-2 rounded font-normal mt-1"
          />
        </label>
        )}
        </div>
      </div>

        {/* ✅ Upload ITRs */}
        <div>
          <label className="block font-medium mb-1">Upload Last 3 Years of ITR</label>

          <div className="space-y-2 mt-2">
            <div>
              <label className="text-sm font-semibold">ITR - Year 1</label>
              <input
                type="file"
                name="itr1"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">ITR - Year 2</label>
              <input
                type="file"
                name="itr2"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">ITR - Year 3</label>
              <input
                type="file"
                name="itr3"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

             <div>
            <label className="text-sm font-semibold">Computation - Year 1</label>
            <input
              type="file"
              name="computation1"
              accept=".pdf"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Computation - Year 2</label>
            <input
              type="file"
              name="computation2"
              accept=".pdf"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              
            />
          </div>
            <div>
            <label className="text-sm font-semibold">Computation - Year 3</label>
            <input
              type="file"
              name="computation3"
              accept=".pdf"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              
            />
          </div>

          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessAssociate;
