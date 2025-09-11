import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getPutObjectUrlService from "../services/s3Services/getPutObjectUrlService";
import putObjectService from "../services/s3Services/putObjectService";
import { toast } from "react-toastify";
import applyForFreelancerService from "../services/partnerServices/applyForFreelancerService";
import { Helmet } from "react-helmet"

const fileFields = [
  "resume",
  "aadharFile",
  "panFile",
  "photo",
  "bankPassbook"
];
const requiredFiles = [
  "resume",
  "aadharFile",
  "panFile",
  "photo",
  "bankPassbook"
];

const Freelancer = () => {
  const [sameAddress, setSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    stdCode: "+91",
    dob: "",
    gender: "",
    maritalStatus: "",
    spouseName: "",
    childrenCount: "",
    fatherName: "",
    motherName: "",
    aadhar: "",
    pan: "",
    residence: "",
    landmark: "",
    state: "",
    city: "",
    pincode: "",
    country: "",
    permanentAddress: "",
    presentAddress: "",
    skills: "",
    experience: "",
    interestedField: "",
    portfolio: "",
    resume: "",
    aadharFile: "",
    panFile: "",
    photo: "",
    bankPassbook: "",
  });

  const [files, setFiles] = useState(
    fileFields.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: fileList[0],
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
          if (!file) return;
          const filetype = file.type;
          const filename = `freelancers/${key}-${uuidv4()}`;
          await uploadFile(file, filetype, filename);
          newFormData[key] = filename;
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
      console.log("Submitting form data:", uploadedFormData);
      await applyForFreelancerService(uploadedFormData);
      toast.success("Freelancer Registration Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to submit the form");
    }
  };

  return (
    <>
   
      <Helmet>
        <title>Freelancer | FTST </title>
        <meta
          name="description"
          content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
        />
        </Helmet>
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-900">
        Freelancer Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/Partners/freelancer.jpg"
            alt="partner"
            className="w-full h-80 lg:h-[400px] object-cover rounded-l-xl"
          />
        </div>

        {/* Personal Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select name="title" value={formData.title} onChange={handleChange} className="p-2 border rounded" required>
              <option value="">Select Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
              <option>Dr</option>
            </select>

            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="p-2 border rounded" required />

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex gap-2">
              <select name="stdCode" value={formData.stdCode} onChange={handleChange} className="p-2 border rounded w-1/3">
                <option value="+91">+91 🇮🇳</option>
              </select>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-2 border rounded w-full" required />
            </div>

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
              className="p-2 border rounded"
              required
            />
            <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded" required>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        {/* Family Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's Name" className="p-2 border rounded" required />
            <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother's Name" className="p-2 border rounded" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="p-2 border rounded" required>
              <option value="">Marital Status</option>
              <option>Unmarried</option>
              <option>Married</option>
              <option>Single</option>
            </select>

            {formData.maritalStatus === "Married" && (
              <>
                <input type="text" name="spouseName" value={formData.spouseName} onChange={handleChange} placeholder="Spouse Name" className="p-2 border rounded" />
                <input type="number" name="childrenCount" value={formData.childrenCount} onChange={handleChange} placeholder="Children" className="p-2 border rounded" />
              </>
            )}
          </div>
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

          <select name="residence" value={formData.residence} onChange={handleChange} className="w-full p-2 border rounded mb-2" required>
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

        {/* Interested Field */}
        <div>
          <label className="block font-medium mb-1">Interested Field</label>
          <select
            name="interestedField"
            value={formData.interestedField}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select a Field</option>
            <option value="HR">HR Recruitment</option>
            <option value="Fintech">Fintech</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        {/* Portfolio URL */}
        <div>
          <label className="block font-medium mb-1">LinkedIn / Portfolio URL</label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="https://yourportfolio.com or LinkedIn profile"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Document Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Upload Aadhaar (PDF/Image)</label>
            <input
              type="file"
              name="aadharFile"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Upload PAN (PDF/Image)</label>
            <input
              type="file"
              name="panFile"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Upload Photograph</label>
            <input
              type="file"
              name="photo"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Upload Bank Passbook (PDF/Image)</label>
            <input
              type="file"
              name="bankPassbook"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              required
              className="w-full border p-2 rounded"
            />
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
    </>
  );
};

export default Freelancer;