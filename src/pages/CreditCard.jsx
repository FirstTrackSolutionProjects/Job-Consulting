import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreditCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Credit Card Inquiry:", formData);
    alert("Thank you! We'll contact you soon.");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg ">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Credit Card – Coming Soon!
      </h2>
      <p className="text-center text-gray-600 mb-6">
        We're launching our credit card services soon. Leave your details and we'll contact you as soon as it's available.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

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
