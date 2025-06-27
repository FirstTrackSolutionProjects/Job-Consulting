import React, { useState } from "react";


const EducationLoanForm = () => {
  const [sameAddress, setSameAddress] = useState(false)
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
    currentAddress: "",
    aadhar: "",
    pan: "",
    studentName: "",
    courseName: "",
    institutionName: "",
    duration: "",
    loanAmount: "",
    guardianName: "",
     accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    purpose: "",
  });

  const handleSameAddress = (e) => {
    const isChecked = e.target.checked;
    setSameAddress(isChecked); // ✅ this line was missing
    if (isChecked) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.currentAddress,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Loan Application:", formData);
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

        <input type="text" name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Current Address" className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark" className="w-full p-2 border rounded mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="p-2 border rounded" required />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="p-2 border rounded" required />
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="p-2 border rounded" required />
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="p-2 border rounded" required />
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

       {/*Purpose of Loan */}
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

        {/* Guardian Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Guardian Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="Guardian Name"
              className="p-2 border rounded"
              required
            />
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              placeholder="Guardian Phone Number"
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="guardianAadhar"
              value={formData.guardianAadhar}
              onChange={handleChange}
              placeholder="Guardian Aadhaar Number"
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="guardianPan"
              value={formData.guardianPan}
              onChange={handleChange}
              placeholder="Guardian PAN Number"
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 mb-1">Guardian Occupation</label>
            <select
              name="guardianOccupation"
              value={formData.guardianOccupation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Occupation</option>
              <option value="service">Service</option>
              <option value="business">Business</option>
              <option value="farmer">Farmer</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Conditional Fields Based on Occupation */}
{formData.guardianOccupation === "service" && (
  <div className="mt-4 space-y-4">
    <input
      type="text"
      name="guardianCompanyName"
      value={formData.guardianCompanyName}
      onChange={handleChange}
      placeholder="Company/Organization Name"
      className="w-full p-2 border rounded"
      required
    />

    <input
      type="number"
      name="guardianYearsInJob"
      value={formData.guardianYearsInJob}
      onChange={handleChange}
      placeholder="Years in Job"
      className="w-full p-2 border rounded"
      required
    />

    <input
      type="text"
      name="guardianAddress"
      value={formData.guardianAddress}
      onChange={handleChange}
      placeholder="Office/Work Address"
      className="w-full p-2 border rounded"
      required
    />

    <input
      type="text"
      name="guardianLandmark"
      value={formData.guardianLandmark}
      onChange={handleChange}
      placeholder="Landmark"
      className="w-full p-2 border rounded"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        name="guardianCity"
        value={formData.guardianCity}
        onChange={handleChange}
        placeholder="City"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="guardianPincode"
        value={formData.guardianPincode}
        onChange={handleChange}
        placeholder="Pincode"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="guardianState"
        value={formData.guardianState}
        onChange={handleChange}
        placeholder="State"
        className="p-2 border rounded"
        required
      />
    </div>

    <input
      type="text"
      name="guardianCountry"
      value={formData.guardianCountry}
      onChange={handleChange}
      placeholder="Country"
      className="w-full p-2 border rounded"
      required
    />
  </div>
)}

{formData.guardianOccupation === "business" && (
  <div className="mt-4 space-y-4">
    <input
      type="text"
      name="guardianBusinessName"
      value={formData.guardianBusinessName}
      onChange={handleChange}
      placeholder="Business Name"
      className="w-full p-2 border rounded"
      required
    />

    <input
      type="number"
      name="guardianYearsInJob"
      value={formData.guardianYearsInJob}
      onChange={handleChange}
      placeholder="Years in Business"
      className="w-full p-2 border rounded"
      required
    />

    <input
      type="text"
      name="guardianAddress"
      value={formData.guardianAddress}
      onChange={handleChange}
      placeholder="Business Address"
      className="w-full p-2 border rounded"
      required
    />

    <input
      type="text"
      name="guardianLandmark"
      value={formData.guardianLandmark}
      onChange={handleChange}
      placeholder="Landmark"
      className="w-full p-2 border rounded"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        name="guardianCity"
        value={formData.guardianCity}
        onChange={handleChange}
        placeholder="City"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="guardianPincode"
        value={formData.guardianPincode}
        onChange={handleChange}
        placeholder="Pincode"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="guardianState"
        value={formData.guardianState}
        onChange={handleChange}
        placeholder="State"
        className="p-2 border rounded"
        required
      />
    </div>

    <input
      type="text"
      name="guardianCountry"
      value={formData.guardianCountry}
      onChange={handleChange}
      placeholder="Country"
      className="w-full p-2 border rounded"
      required
    />
  </div>
)}
</div>

  {/* 6-Month Bank Statement Upload */}
  <div>
    <h2 className="text-xl font-semibold text-gray-900 mb-2">Income Proof</h2>
    <label className="block text-gray-700 mb-1">Upload 6-Month Bank Statement (PDF)</label>
    <input
      type="file"
      name="guardianBankStatement"
      accept=".pdf"
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
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
      </div>

       {/* Document Upload */}
<div>
  <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Documents</h3>

  {/* Aadhaar & PAN */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-gray-700 mb-1">Aadhaar Card (PDF/Image)</label>
      <input
        type="file"
        name="aadharFile"
        accept=".pdf,.jpg,.jpeg,.png"
        className="w-full p-2 border rounded"
        required
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
      />
    </div>
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
    {/* 10th */}
    {formData.highestQualification === "10th" && (
      <>
        <div>
          <label className="block text-gray-700 mb-1">10th Certificate</label>
          <input
            type="file"
            name="tenthCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">10th Marksheet</label>
          <input
            type="file"
            name="tenthMarksheet"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </>
    )}

    {/* 12th */}
    {formData.highestQualification === "12th" && (
      <>
        <div>
          <label className="block text-gray-700 mb-1">12th Certificate</label>
          <input
            type="file"
            name="twelfthCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">12th Marksheet</label>
          <input
            type="file"
            name="twelfthMarksheet"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </>
    )}

    {/* Diploma */}
    {formData.highestQualification === "Diploma" && (
      <>
        <div>
          <label className="block text-gray-700 mb-1">Diploma Certificate</label>
          <input
            type="file"
            name="highestQualificationCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </>
    )}

    {/* Graduate */}
    {formData.highestQualification === "Graduate" && (
      <>
        <div>
          <label className="block text-gray-700 mb-1">Graduation Certificate</label>
          <input
            type="file"
            name="highestQualificationCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </>
    )}

    {/* Post Graduate */}
    {formData.highestQualification === "Post Graduate" && (
      <>
        <div>
          <label className="block text-gray-700 mb-1">Post Graduation Certificate</label>
          <input
            type="file"
            name="highestQualificationCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </>
    )}

    {/* PhD */}
    {formData.highestQualification === "PhD" && (
      <>
        <div>
          <label className="block text-gray-700 mb-1">PhD Certificate</label>
          <input
            type="file"
            name="highestQualificationCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </>
    )}

    {/* Character Certificate (shown for all) */}
    <div>
      <label className="block text-gray-700 mb-1">CLC / Character Certificate</label>
      <input
        type="file"
        name="clcCertificate"
        accept=".pdf,.jpg,.jpeg,.png"
        className="w-full p-2 border rounded"
        required
      />
    </div>
  </div>
)}
</div>





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
