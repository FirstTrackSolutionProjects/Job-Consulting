import React, { useState } from "react";

const BusinessAssociate = () => {
   const [sameAddress, setSameAddress] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    fullname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    company: "",
    designation: "",
    aadhar: "",
    pan: "",
    industry: "",
    state: "",
    city: "",
    pincode: "",
    country: "",
    permanentAddress: "",
    presentAddress: "",
    organisationType: "",
    associationType: "",
    experience: "",
    proposal: "",
    itr1: "",
    itr2: "",
    itr3: "",
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

           {/* fullname */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Business Name */}
        <div>
          <label className="block font-medium mb-1">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            placeholder="Enter your business name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Phone, DOB, Gender */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Phone Number */}
  <div>
    <label className="block text-sm font-medium mb-2">Phone</label>
    <div className="flex">
      <select
        name="stdCode"
        value={formData.stdCode}
        onChange={handleChange}
        className="p-2 border border-gray-700 rounded-l bg-gray-100 text-sm"
      >
        <option value="+91">+91 (India)</option>
        <option value="+1">+1 (USA)</option>
      </select>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
        className="w-full p-2 border border-gray-700 rounded-r"
        required
      />
    </div>
  </div>

  {/* DOB */}
  <div>
    <label className="block text-sm font-medium mb-2">Date of Birth</label>
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
      className="p-2 border rounded w-full"
      required
    />
  </div>

  {/* Gender */}
  <div>
    <label className="block text-sm font-medium mb-2">Gender</label>
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
    </select>
  </div>
</div>


        {/* Company Name */}
        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name (if applicable)"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block font-medium mb-1">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="e.g., Founder, Director, Recruiter"
            className="w-full border p-2 rounded"
          />
        </div>

         {/* KYC Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">KYC Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhaar Number" className="p-2 border rounded" required />
          <input type="text" name="pan" value={formData.pan} onChange={handleChange} placeholder="PAN Number" className="p-2 border rounded" required />
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
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="p-2 border rounded" required />
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

        {/* Business Type */}
        <div>
          <label className="block font-medium mb-1">Organisation Type</label>
          <select
            name="organisationType"
            value={formData.organisationType}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Organisation Type</option>
            <option value="proprietor">Proprietor</option>
            <option value="partnership">Partnership</option>
            <option value="private-limited">Private Limited</option>
          </select>
        </div>

        {/* Association Type */}
        <div>
          <label className="block font-medium mb-1">How would you like to associate with us?</label>
          <textarea
            name="associationType"
            value={formData.associationType}
            onChange={handleChange}
            placeholder="Describe how you'd like to partner"
            className="w-full border p-2 rounded"
            rows={3}
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block font-medium mb-1">Experience in Recruitment or Sales</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g., 3 years in IT recruitment"
            className="w-full border p-2 rounded"
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

        {/* ✅ Upload ITRs */}
        <div>
          <label className="block font-medium mb-1">Upload Last 3 Years of ITR</label>

          <div className="space-y-2 mt-2">
            <div>
              <label className="text-sm">ITR - Year 1</label>
              <input
                type="file"
                name="itr1"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm">ITR - Year 2</label>
              <input
                type="file"
                name="itr2"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm">ITR - Year 3</label>
              <input
                type="file"
                name="itr3"
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
