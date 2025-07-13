import React, { useState } from "react";

const ApplicationForm = () => {
  const [selectedType, setSelectedType] = useState("Candidate");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    city: "",
    resume: null,
    coverLetter: "",
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

    const {
      fullName,
      email,
      countryCode,
      mobile,
      city,
      coverLetter,
    } = formData;

    // Construct WhatsApp message
    const message = `Hello, I am interested in applying for a job.

    Name: ${fullName}
    Email: ${email}
    Phone: ${countryCode} ${mobile}
    City: ${city}
    Cover Letter: ${coverLetter || "N/A"}`;

    // Replace with your WhatsApp number (without + or spaces)
    const phoneNumber = "919040170727"; // ← change this to your number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    alert("Redirecting to WhatsApp...");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Job Application Form
      </h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="w-full border px-4 py-2 rounded"
        required
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border px-4 py-2 rounded"
        required
        onChange={handleChange}
      />

      <div>
        <label className="block font-medium">Mobile Number *</label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded w-28"
            value={formData.countryCode}
          >
            <option value="+91">+91 🇮🇳</option>
            <option value="+1">+1 🇺🇸</option>
            <option value="+44">+44 🇬🇧</option>
            <option value="+61">+61 🇦🇺</option>
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

      <input
        type="text"
        name="city"
        placeholder="Current City"
        className="w-full border px-4 py-2 rounded"
        required
        onChange={handleChange}
      />

      {selectedType === "Candidate" && (
        <div>
          <label className="block font-medium">Upload Resume *</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      <textarea
        name="coverLetter"
        placeholder="Cover Letter"
        className="w-full border px-4 py-2 rounded"
        rows="4"
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
