import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getPutObjectUrlService from "../services/s3Services/getPutObjectUrlService";
import putObjectService from "../services/s3Services/putObjectService";
import applyForEducationLoanService from "../services/loanServices/educationLoanServices/applyForEducationLoanService";
import { toast } from "react-toastify";

const fileFields = [
  "photoFile", "aadharFile", "panFile", "bankProof",
  "tenthCertificate", "tenthMarksheet", "twelfthCertificate", "twelfthMarksheet",
  "diplomaCertificate", "graduationCertificate", "postGradCertificate", "phdCertificate",
  "clcCertificate", "appointmentLetter", "salarySlipFile", "gstFile", "msmeFile",
  "electricityBillFile", "rentAgreementFile", "companyPanFile", "companyTanFile", "cinFile",
  "tradeLicenseFile", "foodLicenseFile", "drugLicenseFile", "bankStatementsCurrentYear1",
  "bankStatementsCCYear1", "deedagreementFile", "itr1File", "itr2File", "itr3File",
  "computationFile1", "computationFile2", "computationFile3"
];
const requiredFiles = [
  "photoFile", "aadharFile", "panFile", "bankProof"
];

const EducationLoanForm = () => {
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
    state: "",
    city: "",
    pincode: "",
    permanentAddress: "",
    presentAddress: "",
    aadhar: "",
    pan: "",
    studentName: "",
    courseName: "",
    institutionName: "",
    duration: "",
    loanAmount: "",
    guardianName: "",
    guardianPhone: "",
    guardianStdCode: "+91",
    guardianRelation: "",
    organizationType: "",
    businessType: "",
    industry: "",
    businessYears: "",
    businessName: "",
    businessAddress: "",
    businessState: "",
    businessCity: "",
    businessPincode: "",
    businessCountry: "",
    annualturnover: "",
    serviceType: "",
    designation: "",
    experience: "",
    officeAddress: "",
    officeState: "",
    officeCity: "",
    officePincode: "",
    officeCountry: "",
    highestQualification: "",
    tenthCertificate: "",
    tenthMarksheet: "",
    tenthPercent: "",
    twelfthCertificate: "",
    twelfthMarksheet: "",
    twelfthPercent: "",
    diplomaCertificate: "",
    diplomaCgpa: "",
    graduationCertificate: "",
    graduationCgpa: "",
    postGradCertificate: "",
    postGradCgpa: "",
    phdCertificate: "",
    phdCgpa: "",
    clcCertificate: "",
    appointmentLetter: "",
    guardianOccupation: "",
    guardianLoanAmount: "",
    occupationDescription: "",
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    purpose: "",
    photoFile: "",
    aadharFile: "",
    panFile: "",
    bankProof: "",
    salarySlipFile: "",
    gstFile: "",
    msmeFile: "",
    electricityBillFile: "",
    rentAgreementFile: "",
    companyPanFile: "",
    companyTanFile: "",
    cinFile: "",
    tradeLicenseFile: "",
    foodLicenseFile: "",
    drugLicenseFile: "",
    bankStatementsCurrentYear1: "",
    bankStatementsCCYear1: "",
    deedagreementFile: "",
    itr1File: "",
    itr2File: "",
    itr3File: "",
    computationFile1: "",
    computationFile2: "",
    computationFile3: "",
  });

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
          const filename = `loans/education-loans/${key}-${uuidv4()}`;
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
      await applyForEducationLoanService(uploadedFormData);
      toast.success("Education Loan Application Submitted Successfully!");
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-l mx-auto bg-white p-6 rounded shadow space-y-4"
    >
      <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/Loan/education-loan.jpg"
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

      {/* Education Loan Details */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Education Loan Details</h2>
      </div>
      <div>
        <label className="block text-gray-900 mb-1">Student Name</label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Course Name</label>
        <input
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          placeholder="Course Name"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Institution Name</label>
        <input
          type="text"
          name="institutionName"
          value={formData.institutionName}
          onChange={handleChange}
          placeholder="Institution Name"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Course Duration (Years)</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Course Duration"
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

        {/* Qualification Dropdown */}
      <div className="mt-6">
        <label className="block text-gray-700 mb-1">Highest Qualification</label>
        <select
          name="highestQualification"
          value={formData.highestQualification}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Qualification</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="Diploma">Diploma</option>
          <option value="Graduate">Graduate</option>
          <option value="Post Graduate">Post Graduate</option>
          <option value="PhD">PhD</option>
        </select>
      </div>

     {/* Education Documents - Conditional Rendering */}
{formData.highestQualification && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

    {/* 10th Details */}
    <div className="col-span-2">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">10th Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-1">10th Certificate</label>
          <input type="file" name="tenthCertificate" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">10th Marksheet</label>
          <input type="file" name="tenthMarksheet" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">10th Percentage</label>
          <input type="text" name="tenthPercent" value={formData.tenthPercent} onChange={handleChange} placeholder="e.g., 88.5%" className="w-full p-2 border rounded" required />
        </div>
      </div>
    </div>

    {/* 12th Details */}
    {["12th", "Diploma", "Graduate", "Post Graduate", "PhD"].includes(formData.highestQualification) && (
      <div className="col-span-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">12th Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">12th Certificate</label>
            <input type="file" name="twelfthCertificate" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">12th Marksheet</label>
            <input type="file" name="twelfthMarksheet" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">12th Percentage</label>
            <input type="text" name="twelfthPercent" value={formData.twelfthPercent} onChange={handleChange} placeholder="e.g., 92%" className="w-full p-2 border rounded" required />
          </div>
        </div>
      </div>
    )}

    {/* Diploma */}
    {["Diploma", "Graduate", "Post Graduate", "PhD"].includes(formData.highestQualification) && (
      <div className="col-span-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Diploma Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Diploma Certificate</label>
            <input type="file" name="diplomaCertificate" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Diploma CGPA</label>
            <input type="text" name="diplomaCgpa" value={formData.diplomaCgpa} onChange={handleChange} placeholder="e.g., 8.2 CGPA" className="w-full p-2 border rounded" required />
          </div>
        </div>
      </div>
    )}

    {/* Graduate */}
    {["Graduate", "Post Graduate", "PhD"].includes(formData.highestQualification) && (
      <div className="col-span-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Graduation Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Graduation Certificate</label>
            <input type="file" name="graduationCertificate" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Graduation CGPA</label>
            <input type="text" name="graduationCgpa" value={formData.graduationCgpa} onChange={handleChange} placeholder="e.g., 7.8 CGPA" className="w-full p-2 border rounded" required />
          </div>
        </div>
      </div>
    )}

    {/* Post Graduate */}
    {["Post Graduate", "PhD"].includes(formData.highestQualification) && (
      <div className="col-span-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Post Graduation Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">PG Certificate</label>
            <input type="file" name="postGradCertificate" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">PG CGPA</label>
            <input type="text" name="postGradCgpa" value={formData.postGradCgpa} onChange={handleChange} placeholder="e.g., 8.0 CGPA" className="w-full p-2 border rounded" required />
          </div>
        </div>
      </div>
    )}

    {/* PhD */}
    {formData.highestQualification === "PhD" && (
      <div className="col-span-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">PhD Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">PhD Certificate</label>
            <input type="file" name="phdCertificate" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">PhD Grade/CGPA</label>
            <input type="text" name="phdCgpa" value={formData.phdCgpa} onChange={handleChange} placeholder="e.g., 9.1 CGPA" className="w-full p-2 border rounded" required />
          </div>
        </div>
      </div>
    )}

    {/* Character Certificate for All */}
    <div className="col-span-2">
      <label className="block text-gray-700 mb-1">CLC / Character Certificate</label>
      <input type="file" name="clcCertificate" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
    </div>
  </div>
)}

   

       {/* Purpose of Loan */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Purpose of Loan *</label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value=""disabled hidden>Select purpose</option>
                <option value="Education">Education</option>
              </select>
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
  <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Documents</h3>

  {/* Aadhaar, PAN, Photo */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-gray-700 mb-1">Photo</label>
      <input
        type="file"
        name="photoFile"
        accept=".jpg,.jpeg,.png"
        className="w-full p-2 border rounded"
        required
        onChange={handleFileChange}
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1">Aadhaar Card (PDF/Image)</label>
      <input
        type="file"
        name="aadharFile"
        accept=".pdf,.jpg,.jpeg,.png"
        className="w-full p-2 border rounded"
        required
        onChange={handleFileChange}
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1">PAN Card (PDF/Image)</label>
      <input
        type="file"
        name="panFile"
        accept=".pdf,.jpg,.jpeg,.png"
        className="w-full p-2 border rounded"
        required
        onChange={handleFileChange}
      />
    </div>
  </div>

  {/* Appointment Letter (based on highestQualification) */}
  {formData.highestQualification && (
    <div className="mt-4">
      <label className="block text-gray-700 mb-1">
        {formData.highestQualification} Appointment Letter
      </label>
      <input
        type="file"
        name={`${formData.highestQualification.replace(/\s/g, '').toLowerCase()}AppointmentLetter`}
        accept=".pdf,.jpg,.jpeg,.png"
        className="w-full p-2 border rounded"
        required
      />
    </div>
  )}
</div>


     {/* Guardian Details */}
        
          <h2 className="text-lg font-bold mb-4">Guardian Details</h2>

          {/* Guardian Name */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Guardian Full Name</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

         {/* Guardian Phone */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Guardian Phone Number</label>
        <div className="flex">
          <select
            name="guardianStdCode"
            value={formData.guardianStdCode}
            onChange={handleChange}
            className="border p-2 rounded-l w-24"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
          </select>
          <input
            type="tel"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
            className="w-full p-2 border border-l-0 rounded-r"
            placeholder="Enter phone number"
          />
        </div>
      </div>


        {/* Relation Dropdown */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Relation with Student</label>
          <select
            name="guardianRelation"
            value={formData.guardianRelation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Relation</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
          </select>
        </div>


      {/* Occupation Dropdown (visible when relation selected) */}
      {formData.guardianRelation && (
        <div className="mb-4">
          <label className="block font-medium mb-1">Guardian Occupation</label>
          <select
            name="guardianOccupation"
            value={formData.guardianOccupation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Occupation</option>
            <option value="Business">Business</option>
            <option value="Service">Service</option>
            <option value="Other">Other</option>
          </select>
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
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required onChange={handleFileChange} />
      </div>


      {/* Business Fields */}
      {formData.guardianOccupation === "Business" && (
        <>

           {/* Organization Type */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Organization Type</label>
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Organization Type</option>
              <option>Proprietor</option>
              <option>Partnership</option>
              <option>Private Limited</option>
              <option>Other</option>
            </select>
          </div>

            {/* Business Type */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Business Type</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Business Type</option>
              <option>Own</option>
              <option>Rented</option>
            </select>
          </div>

          <InputField label="Industry" name="industry" />
          <InputField label="Business Name" name="businessName" />
          <InputField label="Years in Business" name="yearsInBusiness" type="number" />
          <InputField label="Annual Turnover (₹)" name="annualTurnover" type="number" />
          <InputField label="Business Address" name="businessAddress" />
          <InputField label="City" name="businessCity" />
          <InputField label="Pincode" name="businessPincode" />
          <InputField label="State" name="businessState" />

           <div className="mb-4">
            <label className="block font-medium mb-1">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            > 
              <option value="">Select Country</option>
              <option value="India">India</option>
            </select>
          </div>


         {/* Upload Section */}
        <FileField label="Upload Photo" name="photoFile" />
        <FileField label="Aadhar Card" name="aadharFile" />
        <FileField label="PAN Card" name="panFile" />
        <FileField label="GST Certificate" name="gstFile" />
        <FileField label="MSME/Udyam Certificate" name="msmeFile" />
        <FileField label="Electricity Bill" name="electricityBillFile" />

        {/* Conditionally show Rent Agreement */}
        {formData.businessType === "Rented" && (
          <FileField label="Rent Agreement" name="rentAgreementFile" />
        )}
        {formData.organizationType === "Private Limited" && (
          <>
         <FileField label="Company PAN" name="companyPanFile" />
          <FileField label="Company TAN" name="companyTanFile" />
          <FileField label="CIN (Company Identification Number)" name="cinFile" />
          </>
        )}
          <FileField label="Trade License" name="tradeLicenseFile" />
          <FileField label="Food License" name="foodLicenseFile" />
          <FileField label="Drug License" name="drugLicenseFile" />
          <FileField label="1 Year Bank Statement (CA)" name="bankStatementsFile" />
          {/* <FileField label="1 Year Bank Statement (CC)" name="bankStatementsCCFile" /> */}

          {/* Conditionally show Deed Agreement */}
          {formData.organizationType === "Partnership" && (
            <FileField label="Deed Agreement" name="deedAgreementFile" />
          )}

          {/* ITR and Computation Files */}
          <FileField label="ITR Year 1" name="itr1File" />
          <FileField label="ITR Year 2" name="itr2File" />
          <FileField label="ITR Year 3" name="itr3File" />
          <FileField label="Computation Year 1" name="computationFile1" />
          <FileField label="Computation Year 2" name="computationFile2" />
          <FileField label="Computation Year 3" name="computationFile3" />
        </>
      )}

      {/* Service Fields */}
     {formData.guardianOccupation === "Service" && (
    <>
      {/* Service Type Dropdown */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Service Type</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Service Type</option>
          <option value="Private Job">Private Job</option>
          <option value="Government Job">Government Job</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Company Info */}
      <InputField label="Company/Organization Name" name="businessName" />
      <InputField label="Designation" name="designation" />
      <InputField label="Years in Job" name="experience" type="number" />
      <InputField label="Office Address" name="officeAddress" />
      <InputField label="City" name="officeCity" />
      <InputField label="Pincode" name="officePincode" />
      <InputField label="State" name="officeState" />

        {/* Country Dropdown */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Country</label>
          <select
            name="officeCountry"
            value={formData.officeCountry}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
          </select>
        </div>

        {/* Upload Section */}
        <FileField label="Upload Photo" name="photoFile" />
        <FileField label="Aadhar Card" name="aadharFile" />
        <FileField label="PAN Card" name="panFile" />
        <FileField label="Salary Slip (Last 3 Months)" name="salarySlipFile" />
      </>
    )}


        {/* Other Fields */}
      {formData.guardianOccupation === "Other" && (
        <>
          {/* What does guardian do - Dropdown */}
          <div className="mb-4">
            <label className="block font-medium mb-1">What does the guardian do?</label>
            <select
              name="occupationDescription"
              value={formData.occupationDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="Homemaker">Homemaker</option>
              <option value="Farmer">Farmer</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Retired">Retired</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <InputField label="Loan Amount" name="guardianLoanAmount" type="number" />
          <FileField label="Aadhar Card" name="aadharFile" />
          <FileField label="PAN Card" name="panFile" />
        </>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </form>
  );
};

export default EducationLoanForm;
