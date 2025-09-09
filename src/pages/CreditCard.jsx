import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import getPutObjectUrlService from "../services/s3Services/getPutObjectUrlService";
import putObjectService from "../services/s3Services/putObjectService";
import { toast } from "react-toastify";
import applyForCreditCardService from "../services/creditCardServices/applyForCreditCardService";
import { Helmet } from "react-helmet";

// For future file uploads, keep these arrays ready
const fileFields = [
  "photo",
  "aadhaar",
  "pan",
  "salaryslip",
  "itr1",
  "itr2",
  "computation1",
  "computation2"
];
const requiredFiles = [
  "photo",
  "aadhaar",
  "pan",
];

const CreditCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stdCode: "+91",
    message: "",
    profession: "",
    businessName: "",
    yearsInBusiness: "",
    photo: "",
    aadhaar: "",
    pan: "",
    salaryslip: "",
    companyName: "",
    itr1: "",
    itr2: "",
    computation1: "",
    computation2: "",
  });

  const [files, setFiles] = useState(
    fileFields.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
     <>
    <Helmet>
            <title>Credit Card | FTST </title>
            <meta
              name="description"
              content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
            />
          </Helmet>
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Credit Card 
      </h2>
     <p className="text-center text-gray-600 mb-6">
      Credit card services are available. Choose a card that suits your needs and start enjoying the benefits.
    </p>


      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
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
        <div>
            <label className="block mb-1 text-gray-700 font-bold">Photo</label>
            <input type="file" name="photo" accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="w-full p-2 border rounded" required />
          </div>
           <div>
            <label className="block mb-1 text-gray-700 font-bold">Aadhaar Card</label>
            <input type="file" name="aadhaar" accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="w-full p-2 border rounded" required />
          </div>
            <div>
            <label className="block mb-1 text-gray-700 font-bold">Pan Card</label>
            <input type="file" name="pan" accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="w-full p-2 border rounded" required />
          </div>
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
          <label className="block  mb-1 font-bold mt-3">Upload Last 2 Years of ITR/Computation</label>

          <div className="space-y-2 mt-2">
            <div>
              <label className="text-sm font-semibold">ITR - Year 1</label>
              <input
                type="file"
                name="itr1"
                accept=".pdf"
                onChange={handleFileChange}
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
                onChange={handleFileChange}
                className="w-full border p-2 rounded"
                
              />
            </div>

            <div>
            <label className="text-sm font-semibold">Computation - Year 1</label>
            <input
              type="file"
              name="computation1"
              accept=".pdf"
              onChange={handleFileChange}
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
              onChange={handleFileChange}
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
            <label className="block mb-1 text-gray-700 font-bold">Salary Slip (2 Months)</label>
            <input type="file" name="salaryslip" accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="w-full p-2 border rounded" required />
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
    </>
  );
};

export default CreditCard;