import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getPutObjectUrlService from "../services/s3Services/getPutObjectUrlService";
import putObjectService from "../services/s3Services/putObjectService";
import { toast } from "react-toastify";
import applyForInsuranceService from "../services/insuranceServices/applyForInsuranceService";

const fileFields = ["idProof", "photo"];
const requiredFiles = ["idProof", "photo"];

const InsuranceForm = () => {
  const [sameAddress, setSameAddress] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    stdCode: "+91",
    gender: "",
    residence: "",
    state: "",
    city: "",
    pincode: "",
    country: "",
    permanentAddress: "",
    presentAddress: "",
    insuranceType: "",
    nomineeName: "",
    nomineeRelation: "",
    profession: "",
    professionType: "",
    organizationType: "",
    businessType: "",
    industry: "",
    businessName: "",
    businessYears: "",
    businessannualturnover: "",
    businessAddress: "",
    businessCity: "",
    businessPincode: "",
    businessState: "",
    businessCountry: "",
    businessProof: "",
    companyName: "",
    jobYears: "",
    officeAddress: "",
    officeCity: "",
    officePincode: "",
    officeState: "",
    officeCountry: "",
    photo: "",
    aadharcard: "",
    pancard: "",
    incomeproof: "",
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
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
          const filename = `insurance/${key}-${uuidv4()}`;
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
      await applyForInsuranceService(uploadedFormData);
      toast.success("Insurance Application Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to submit the form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow rounded space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Insurance Application Form</h2>

      <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <img
          src="/images/insurance.jpg"
          alt="insurance"
          className="w-full h-96 object-cover lg:h-auto"
        />
      </div>

      {/* Applicant Details */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Applicant Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="p-2 border rounded" required />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="p-2 border rounded" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded" required />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex gap-2">
            <select name="stdCode" value={formData.stdCode} onChange={handleChange} className="p-2 border rounded w-1/3">
              <option value="+91">+91 🇮🇳</option>
            </select>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-2 border rounded w-full" required />
          </div>
          <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      </div>

      {/* Address Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Present Address Details</h3>

         <select residence="residence" value={formData.residence} onChange={handleChange} className="w-full p-2 border rounded mb-2" required>
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
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
          </select>

        </div>

        <label className="flex items-center gap-2 mb-2">
          <input type="checkbox" onChange={handleSameAddress} />
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

      {/* Insurance Type */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Insurance Details</h3>
        <select name="insuranceType" value={formData.insuranceType} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Insurance Type</option>
          <option>Health Insurance</option>
          <option>Life Insurance</option>
          <option>Vehicle Insurance</option>
          <option>Travel Insurance</option>
        </select>
      </div>

      {/* Nominee Details */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Nominee Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="nomineeName" value={formData.nomineeName} onChange={handleChange} placeholder="Nominee Name" className="p-2 border rounded" required />
          <input type="text" name="nomineeRelation" value={formData.nomineeRelation} onChange={handleChange} placeholder="Relation with Nominee" className="p-2 border rounded" required />
        </div>
      </div>

      {/* profession details */}
       {/* Profession Details */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-bold">Profession</label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Profession</option>
              <option value="Business">Business</option>
              <option value="Service">Service</option>
              <option value="None">None</option>
            </select>
          </div>

          {/* Business Section */}
        {formData.profession === "Business" && (
          <div className="mb-4 space-y-2">
            <label className="block text-gray-700">Profession Type</label>
            <select
              name="professionType"
              value={formData.professionType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Profession Type</option>
              <option value="Retail">Retail/Shop/Mart</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Freelancer">Freelancer</option>
              <option value="IT Consulting">IT Consulting</option>
              <option value="Media">Media</option>
              <option value="Internet">Internet</option>
              <option value="Other">Other</option>
            </select>

             {/* Organization Type */}
      <label className="block mb-2 font-medium">Organization Type</label>
      <select
        name="organizationType"
        value={formData.organizationType}
        onChange={handleChange}
        className="w-full border px-3 py-2 mb-4"
      >
        <option value="">Select Organization Type</option>
        <option value="proprietor">Proprietor</option>
        <option value="partnership">Partnership</option>
        <option value="private_limited">Private Limited</option>
        <option value="other">Other</option>
      </select>
          
      {/* Business Type */}
      <label className="block mb-2 font-medium">Business Type</label>
      <select
        name="businessType"
        value={formData.businessType}
        onChange={handleChange}
        className="w-full border px-3 py-2 mb-4"
      >
        <option value="">Select Business Type</option>
        <option value="own">Own</option>
        <option value="rented">Rented</option>
      </select>

      {/* Industry */}
      <label className="block mb-2 font-medium">Industry</label>
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="Enter Industry"
        className="w-full border px-3 py-2 mb-4"
      />

      {/* Business Name */}
          <div>
            <label className="block text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              required
              className="w-full p-2 border rounded mb-2"
            />
          </div>
           
            <input
              type="number"
              name="businessYears"
              value={formData.businessYears}
              onChange={handleChange}
              placeholder="Years in Business"
              className="w-full p-2 border rounded mb-4"
              required
            />
             <input
                type="text"
                name="businessannualturnover"
                value={formData.businessannualturnover}
                onChange={handleChange}
                placeholder="Annual Turnover"
                className="w-full p-2 border rounded mb-4"
                required
              />

            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              placeholder="Business Address"
              className="w-full p-2 border rounded mb-4"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                name="businessCity"
                value={formData.businessCity}
                onChange={handleChange}
                placeholder="City"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="businessPincode"
                value={formData.businessPincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="businessState"
                value={formData.businessState}
                onChange={handleChange}
                placeholder="State"
                className="p-2 border rounded"
                required
              />
              <select
                name="businessCountry"
                value={formData.businessCountry}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
             </select>
              
            </div>
          </div>
        )}


         {/* Service Section */}
        {formData.profession === "Service" && (
          <div className="mb-4 space-y-2">
            <label className="block text-gray-700">Profession Type</label>
            <select
              name="professionType"
              value={formData.professionType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Service Type</option>
              <option value="Private Job">Private Job</option>
              <option value="Government Job">Government Job</option>
            
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="number"
              name="jobYears"
              value={formData.jobYears}
              onChange={handleChange}
              placeholder="Years in Job"
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="text"
              name="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              placeholder="Office Address"
              className="w-full p-2 border rounded"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                name="officeCity"
                value={formData.officeCity}
                onChange={handleChange}
                placeholder="City"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="officePincode"
                value={formData.officePincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="officeState"
                value={formData.officeState}
                onChange={handleChange}
                placeholder="State"
                className="p-2 border rounded"
                required
              />
              <select
                name="officeCountry"
                value={formData.officeCountry}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
              </select>
              
            </div>
          </div>
        )}

         {/* Bank Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} placeholder="Account Holder Name" className="p-2 border rounded" required />
          <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" className="p-2 border rounded" required />
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="p-2 border rounded" required />
          <input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} placeholder="IFSC Code" className="p-2 border rounded" required />
        </div>

        <label className="block mt-4 mb-1">Bank Statement</label>
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
      </div>

      {/* Documents */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Document Upload</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Upload ID Proof (Aadhaar, PAN, etc.)</label>
            <input type="file" name="idProof" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Upload Passport Size Photo</label>
            <input type="file" name="photo" accept=".jpg,.jpeg,.png" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
        </div>
      </div>
         
          {/* ✅ Upload ITRs */}
          {formData.profession === "Business" && (
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
      )}

       {/* Show Salary Slip Only if Profession is Service */}
      {formData.profession === "Service" && (
        <label className="block text-gray-900 mb-1 font-semibold">
          Salary Slip (Last 2 Months)
          <input
            type="file"
            name="incomeproof"
            accept=".pdf"
            onChange={handleChange}
            className="w-full border p-2 rounded font-normal"
          />
        </label>
        )}

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-3">Submit Application</button>
    </form>
    
  );
};

export default InsuranceForm;