import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import getPutObjectUrlService from "../services/s3Services/getPutObjectUrlService";
import putObjectService from "../services/s3Services/putObjectService";
import { toast } from "react-toastify";
import applyForCreditCardService from "../services/creditCardServices/applyForCreditCardService";

// For future file uploads, keep these arrays ready
const fileFields = [];
const requiredFiles = [];

const CreditCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [files, setFiles] = useState(
    fileFields.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: fileList[0],
    }));
  };

  const uploadFile = async (file, filetype, filename) => {
    try {
      const putUrl = await getPutObjectUrlService(filename, filetype, false);
      await putObjectService(putUrl, file, filetype);
    } catch (error) {
      console.error("File upload error:", error);
      throw new Error("File upload failed");
    }
  };

  const handleFileUpload = async () => {
    try {
      let isMissingFile = false;
      for (const key of requiredFiles) {
        if (!files[key]) {
          isMissingFile = true;
          toast.error(`${key} is required`);
        }
      }
      if (isMissingFile) return false;

      const newFormData = { ...formData };
      await Promise.all(
        fileFields.map(async (key) => {
          const file = files[key];
          if (!file) return; // skip optional files if not provided
          const filetype = file.type;
          const filename = `credit-card-inquiries/${key}-${uuidv4()}`;
          await uploadFile(file, filetype, filename);
          newFormData[key] = filename; // Store the filename in formData
        })
      );
      setFormData(newFormData);
      return newFormData;
    } catch (error) {
      console.error(error);
      toast.error("File upload failed: " + error.message);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadedFormData = await handleFileUpload();
    if (uploadedFormData === false) return;
    try {
      await applyForCreditCardService(uploadedFormData || formData);
      toast.success("Thank you! We'll contact you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to submit the form");
    }
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
        <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/images/credit-card.jpg"
            alt="creditcard"
            className="w-full h-96 object-cover lg:h-auto"
          />
        </div>

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

        {/* For future file uploads, add file inputs here and use handleFileChange */}

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