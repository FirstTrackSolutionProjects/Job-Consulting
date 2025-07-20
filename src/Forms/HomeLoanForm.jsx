import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getPutObjectUrlService from "../services/s3Services/getPutObjectUrlService";
import putObjectService from "../services/s3Services/putObjectService";
import applyForHomeLoanService from "../services/loanServices/homeLoanServices/applyForHomeLoanService";
import { toast } from "react-toastify";

const HomeLoanForm = () => {
  const [sameAddress, setSameAddress] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    stdCode: "+91",
    altStdCode: "+91",
    altPhone: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    spouseName: "",
    childrenCount: "",
    fatherName: "",
    motherName: "",
    residence: "",
    state: "",
    city: "",
    pincode: "",
    country: "",
    permanentAddress: "",
    presentAddress: "",
    aadhar: "",
    pan: "",
    landmark: "",
    income: "",
    location: "",
    propertyValue: "",
    loanAmount: "",
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    bankProof: "",
    purpose: "",
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
    aadharFile: "",
    panFile: "",
    incomeproof: "",
    companypan: "",
    companytan: "",
    cin: "",
    gst: "",
    msme: "",
    electricityBill: "",
    rentagreement: "",
    tradeLicense: "",
    foodLicense: "",
    drugLicense: "",
    beedagreement: "",
    bankStatementsCurrentYear1: "",
    bankStatementsCCYear1: "",
    itr1: "",
    itr2: "",
    itr3: "",
    computation1: "",
    computation2: "",
    computation3: "",
  });

  // List all file fields here (update as needed)
  const fileFields = [
    "photo", "aadharFile", "panFile", "incomeproof", "companypan", "companytan", "cin", "gst", "msme", "electricityBill", "rentagreement", "tradeLicense", "foodLicense", "drugLicense", "beedagreement", "bankStatementsCurrentYear1", "bankStatementsCCYear1", "itr1", "itr2", "itr3", "computation1", "computation2", "computation3", "bankProof", "businessProof"
  ];
  // List only required file fields here (update as needed)
  const requiredFiles = [
    "photo", "aadharFile", "panFile", "bankProof"
  ];

  const [files, setFiles] = useState(
    fileFields.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

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
          const filename = `loans/home-loans/${key}-${uuidv4()}`;
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
    if (!uploadedFormData) return;
    try {
      await applyForHomeLoanService(uploadedFormData);
      toast.success("Home Loan Application Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to submit the form");
    }
  };

  const handleSameAddress = (e) => {
    const isChecked = e.target.checked;
    setSameAddress(isChecked);
    if (isChecked) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.presentAddress,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: "",
      }));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-l mx-auto bg-white p-6 rounded shadow space-y-4"
    >
      <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <img
          src="/Loan/home-loan.jpg"
          alt="Loan"
          className="w-full h-96 object-cover lg:h-auto"
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

          {/* Alternate Phone Number */}
          <div className="flex gap-2">
            <select
              name="altStdCode"
              value={formData.altStdCode}
              onChange={handleChange}
              className="p-2 border rounded w-1/3"
            >
              <option value="+91">+91 🇮🇳</option>
              <option value="+1">+1 🇺🇸</option>
              <option value="+44">+44 🇬🇧</option>
            </select>
            <input
              type="tel"
              name="altPhone"
              value={formData.altPhone}
              onChange={handleChange}
              placeholder="Alternate Number"
              className="p-2 border rounded w-full"
            />
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

      {/* Home Loan Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Home Details</h3>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Property Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Property Location"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Property Value (₹)</label>
        <input
          type="number"
          name="propertyValue"
          value={formData.propertyValue}
          onChange={handleChange}
          placeholder="Property Value"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Loan Amount (₹)</label>
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          placeholder="Loan Amount"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Purpose of Loan */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Purpose of Loan *</label>
        <input
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          placeholder="Enter purpose of the loan"
          className="w-full p-2 border rounded"
          required
        />
      </div>

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
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
      </div>

      {/* Document Upload */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Upload Documents
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Your Photo */}
          <div>
            <label className="block text-gray-700 mb-1">Your Photo (Passport Size)</label>
            <input
              type="file"
              name="photo"
              accept=".jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
              onChange={handleFileChange}
            />
          </div>

          {/* Aadhaar */}
          <div>
            <label className="block text-gray-700 mb-1">Aadhaar Card</label>
            <input
              type="file"
              name="aadharFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
              onChange={handleFileChange}
            />
          </div>

          {/* PAN */}
          <div>
            <label className="block text-gray-700 mb-1">PAN Card</label>
            <input
              type="file"
              name="panFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
              onChange={handleFileChange}
            />
          </div>
          {/* Business Proof */}
          {/* Show Business Docs Only if Profession is Business */}
          {formData.profession === "Business" && (
            <>
              <label className="block text-gray-900 mb-1 font-semibold">
                GST Certificate
                <input
                  type="file"
                  name="gst"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded font-normal"
                />
              </label>

              <label className="block text-gray-900 mb-1 font-semibold">
                MSME/Udyam Certificate
                <input
                  type="file"
                  name="msme"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded font-normal"
                />
              </label>

              <label className="block text-gray-900 mb-1 font-semibold">
                Electricity Bill
                <input
                  type="file"
                  name="electricityBill"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded font-normal"
                />
              </label>

              {/* Show rent agreement Only if businesstype is rented */}
              {formData.businessType === "rented" && (
                <label className="block text-gray-900 mb-1 font-semibold">
                  Rent Agreement
                  <input
                    type="file"
                    name="rentagreement"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full border p-2 rounded font-normal"
                  />
                </label>
              )}

              {formData.organizationType === "private_limited" && (
                <>
                  <label className="block text-gray-900 mb-1 font-semibold">
                    Company Identification Number (CIN)
                    <input
                      type="file"
                      name="cin"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="w-full border p-2 rounded font-normal"
                    />
                  </label>

                  <label className="block text-gray-900 mb-1 font-semibold">
                    Company PAN
                    <input
                      type="file"
                      name="companypan"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="w-full border p-2 rounded font-normal"
                    />
                  </label>

                  <label className="block text-gray-900 mb-1 font-semibold">
                    Company TAN
                    <input
                      type="file"
                      name="companytan"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="w-full border p-2 rounded font-normal"
                    />
                  </label>
                </>
              )}

              <label className="block text-gray-900 mb-1 font-semibold">
                Trade License
                <input
                  type="file"
                  name="tradeLicense"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded font-normal"
                />
              </label>

              <label className="block text-gray-900 mb-1 font-semibold">
                Food License
                <input
                  type="file"
                  name="foodLicense"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded font-normal"
                />
              </label>

              <label className="block text-gray-900 mb-1 font-semibold">
                Drug License
                <input
                  type="file"
                  name="drugLicense"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded font-normal"
                />
              </label>

              {/* Show deed agreement Only if organizationtype is partnership */}
              {formData.organizationType === "partnership" && (
                <label className="block text-gray-900 mb-1 font-semibold">
                  Partnership Deed
                  <input
                    type="file"
                    name="deedagreement"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full border p-2 rounded font-normal"
                  />
                </label>
              )}

              {/* Bank Statement */}
              <label className="block text-gray-900 mb-1 font-semibold">
                1 Year Bank Statements (CA) (PDF)
                <input
                  type="file"
                  name="bankStatementsCurrent"
                  accept=".pdf"
                  className="w-full p-2 border rounded font-normal"
                  required
                  onChange={handleFileChange}
                />
              </label>
            </>
          )}
        </div>
      </div>

      {/* ✅ Upload ITRs */}
      {formData.profession === "Business" && (
        <div>
          <label className="block  mb-1 font-bold">Upload Last 3 Years of ITR/Computation</label>

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
              <label className="text-sm font-semibold">ITR - Year 3</label>
              <input
                type="file"
                name="itr3"
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
            <div>
              <label className="text-sm font-semibold">Computation - Year 3</label>
              <input
                type="file"
                name="computation3"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
        </div>
      )}

      {/* Show Salary Slip Only if Profession is Service */}
      {formData.profession === "Service" && (
        <label className="block text-gray-900 mb-1 font-semibold">
          Salary Slip (Last 3 Months)
          <input
            type="file"
            name="incomeproof"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full border p-2 rounded font-normal"
          />
        </label>
      )}

      {/* Apply Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </form>
  );
};

export default HomeLoanForm;