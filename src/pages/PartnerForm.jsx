import React, { useState } from "react";

const PartnerForm = ({ selectedType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    resume: null,
    companyDoc: null,
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
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
    // You can integrate with API here
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 bg-white p-6 shadow-md rounded-lg">
      {/* <h2 className="text-2xl font-bold text-center mb-6">
        {selectedType === "Company" ? "Company Registration" : "Candidate Registration"}
      </h2> */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name / Company Name *</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder={selectedType === "Company" ? "Company Name" : "Your Full Name"}
          />
        </div>

        <div>
          <label className="block font-medium">Email *</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

       <div>
          <label className="block font-medium">Mobile Number *</label>
          <div className="flex gap-2">
            <select
                name="countryCode"
                required
                onChange={handleChange}
                className="border px-3 py-2 rounded w-28"
            >
                <option value="+91">+91 🇮🇳</option>
                <option value="+1">+1 🇺🇸</option>
                <option value="+44">+44 🇬🇧</option>
                <option value="+61">+61 🇦🇺</option>
            {/* Add more as needed */}
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

        <div>
          <label className="block font-medium">Address *</label>
          <textarea
            name="address"
            rows="3"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

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

        {selectedType === "Company" && (
          <div>
            <label className="block font-medium">Upload Company Registration Document *</label>
            <input
              type="file"
              name="companyDoc"
              accept=".pdf,.doc,.docx,.jpg,.png"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;
