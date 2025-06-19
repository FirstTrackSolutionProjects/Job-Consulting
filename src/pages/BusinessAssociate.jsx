import React, { useState } from "react";

const BusinessAssociate = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    location: "",
    industry: "",
    organisationType: "",
    associationType: "",
    experience: "",
    proposal: null,
    itr1: null,
    itr2: null,
    itr3: null,
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
    console.log("Business Associate Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
        Business Associate Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

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

        {/* Phone */}
          <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="mobile">
                Mobile
              </label>
              <div className="flex">
                 <select
                    className="p-2 border border-gray-700 rounded-l bg-gray-100 text-sm"
                    defaultValue="+91"
                    >
                  <option value="+91">+91 (India)</option>
                  {/* <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option> */}
                </select>
              <input
                type="tel"
                id="mobile"
                className="w-full p-2 border border-gray-700 rounded"
                required
              />
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

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="City / State"
            className="w-full border p-2 rounded"
          />
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
