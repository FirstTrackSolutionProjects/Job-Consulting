import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreditCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stdCode: "+91",
    message: "",
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Credit Card Inquiry:", formData);
    alert("Thank you! We'll contact you soon.");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Credit Card – Coming Soon!
      </h2>
      <p className="text-center text-gray-600 mb-6">
        We're launching our credit card services soon. Leave your details and we'll contact you as soon as it's available.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Banner Image */}
        <div className="rounded-lg overflow-hidden shadow">
          <img
            src="/images/credit-card.jpg"
            alt="creditcard"
            className="w-full h-60 object-cover"
          />
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        {/* Phone */}
        <div className="flex gap-2">
          <select
            name="stdCode"
            value={formData.stdCode}
            onChange={handleChange}
            className="p-2 border rounded w-1/3"
          >
            <option value="+91">+91 🇮🇳</option>
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-2 border rounded w-full"
            required
          />
        </div>

        {/* Profession */}
        <select
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Profession</option>
          <option value="Business">Business</option>
          <option value="Service">Service</option>
        </select>

        {/* Conditional Business or Service Details */}
        {formData.profession === "Business" && (
          <>
            <h3 className="text-lg font-semibold mt-4">Business Details</h3>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="yearsInBusiness"
              placeholder="Years in Business"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <h3 className="text-lg font-semibold mt-4">Upload Documents</h3>
          <div>
            <label className="block mb-1 text-gray-700 font-bold">Photo</label>
            <input type="file" name="photo" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
           <div>
            <label className="block mb-1 text-gray-700 font-bold">Aadhar Card</label>
            <input type="file" name="aadhar" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
            <div>
            <label className="block mb-1 text-gray-700 font-bold">Pan Card</label>
            <input type="file" name="pan" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
           <div>
          <label className="block  mb-1 font-bold mt-3">Upload Last 2 Years of ITR/Computation</label>

          <div className="space-y-2 mt-2">
            <div>
              <label className="text-sm font-semibold">ITR - Year 1</label>
              <input
                type="file"
                name="itr1"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
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
          </div>
        </div>
          </>
        )}

        {formData.profession === "Service" && (
          <>
            <h3 className="text-lg font-semibold mt-4">Service Details</h3>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <h3 className="text-lg font-semibold mt-4">Upload Documents</h3>
             <div>
            <label className="block mb-1 text-gray-700 font-bold">Photo</label>
            <input type="file" name="photo" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
           <div>
            <label className="block mb-1 text-gray-700 font-bold">Aadhar Card</label>
            <input type="file" name="aadhar" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
            <div>
            <label className="block mb-1 text-gray-700 font-bold">Pan Card</label>
            <input type="file" name="pan" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-bold">Salary Slip (2 Months)</label>
            <input type="file" name="salaryslip" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
            
          </>
        )}

        {/* Message */}
        <textarea
          name="message"
          placeholder="Any message or inquiry"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Extra Contact Options */}
      <div className="text-center mt-6 space-y-2">
        <p className="text-sm text-gray-500">Or reach us on WhatsApp:</p>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block"
        >
          Chat on WhatsApp
        </a>

        <button
          onClick={() => navigate("/contact")}
          className="text-blue-600 hover:underline text-sm"
        >
          Go to Contact Page
        </button>
      </div>
    </div>
  );
};

export default CreditCard;
