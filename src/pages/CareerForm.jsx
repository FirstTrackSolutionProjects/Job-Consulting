import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CareerForm = () => {
   const location = useLocation();
  const jobTitle = location.state?.jobTitle || "";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    stdCode: "+91",
    dob: "",
    gender: "Male",
    street: "",
    city: "",
    postalCode: "",
    country: "India",
    description: "",
    qualification: "",
    job: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to backend)
    console.log("Form submitted:", formData);
  };

  const qualifications = ["Post Graduation/Master's", "Graduation", "BTech"];
  const jobOptions = [
    "Sales Co-ordinator",
    "Relationship Officer",
    "Relationship Manager",
    "Human Resource Executive (HRE)",
    "HR Intern",
    "IT Intern",
    "Admin Executive",
    "Tele Caller",
    "Client Relationship Manager [CRM]",
    "Corporate Relationship Manager [CRM]",
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 mt-14">

        {/* Top Image */}
      <div className="mb-6">
        <img
          src="/images/career-banner.jpg" // replace this path with your actual image path
          alt="Career Banner"
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="Eg: John"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Eg: Doe"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Eg: john@doe.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Phone *</label>
            <div className="flex">
                <select
                  name="stdCode"
                  onChange={handleChange}
                    className="border p-2 bg-white"
                    value={formData.stdCode || "+91"}
                >
                    <option value="+91">+91(India)</option>
                    <option value="+1">+1(USA)</option>
                    <option value="+44">+44(UK)</option>
                    <option value="+61">+61(Australia)</option>
                    <option value="+971">+971(UAE)</option>
                </select>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2"
            />
            </div>
          </div>
          <div>
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label>Street Address *</label>
            <input
              type="text"
              name="street"
              placeholder="Eg: 24 Wallaby Way"
              required
              value={formData.street}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>City *</label>
            <input
              type="text"
              name="city"
              placeholder="Eg: Sydney"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Postal Code *</label>
            <input
              type="text"
              name="postalCode"
              placeholder="Eg: 2000"
              required
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Your message here.."
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2"
            rows={4}
          />
        </div>

        <div>
          <label>Highest Qualification *</label>
          <div className="space-y-2">
            {qualifications.map((q) => (
              <label key={q} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="qualification"
                  value={q}
                  required
                  checked={formData.qualification === q}
                  onChange={handleChange}
                />
                {q}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Job Applied *</label>
          <div className="space-y-2">
            {jobOptions.map((job) => (
              <label key={job} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="job"
                  value={job}
                  required
                  checked={formData.job === job}
                  onChange={handleChange}
                />
                {job}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2">Upload CV *</label>
             <div className="border-2 border-double border-gray-600 rounded-lg p-4 text-center cursor-pointer bg-white hover:border-teal-700 transition duration-300">
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
              className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-gray-700 "
          />
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default CareerForm;
