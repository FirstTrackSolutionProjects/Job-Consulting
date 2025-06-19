import React, { useState } from "react";

const Freelancer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    permanentAddress: "",
    currentAddress: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSameAddress = (e) => {
    if (e.target.checked) {
      setFormData((prev) => ({
        ...prev,
        currentAddress: prev.permanentAddress,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Freelancer Form Data:", formData);
    alert("Form submitted successfully!");
    // You can add an API POST request here to send formData to the backend.
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-900">
        Freelancer Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
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
                    className="p-2 border border-gray-300 rounded-l bg-gray-100 text-sm"
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
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              </div>
            </div>

        {/* Skills */}
        <div>
          <label className="block font-medium mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            placeholder="e.g., React, Node.js"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block font-medium mb-1">Experience</label>
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Permanent Address */}
        <div>
          <label className="block font-medium mb-1">Permanent Address</label>
          <textarea
            name="permanentAddress"
            placeholder="Your Permanent Address"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            rows={3}
          />
        </div>

        {/* Same as checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="sameAddress"
            onChange={handleSameAddress}
          />
          <label htmlFor="sameAddress">Current address same as permanent address</label>
        </div>

        {/* Current Address */}
        <div>
          <label className="block font-medium mb-1">Current Address</label>
          <textarea
            name="currentAddress"
            placeholder="Your Current Address"
            value={formData.currentAddress}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            rows={3}
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
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

export default Freelancer;
