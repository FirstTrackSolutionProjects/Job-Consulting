import React, { useState } from "react";

const PersonalLoanForm = () => {
  const [sameAddress, setSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    stdCode: "+91",
    phone: "",
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
    landmark: "",
    country: "",
    permanentAddress: "",
    presentAddress: "",
    aadhar: "",
    pan: "",
    income: "",
    employmentType: "",
    organization: "",
    designation: "",
    department: "",
    profession: "",
    experienceYears: "",
    experienceMonths: "",
    experience: "",
    salarySlip: "",
    loanAmount: "",
    purpose: "",
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    officialAddress: "",
    officialLandmark: "",
    officialCity: "",
    officialPincode: "",
    officialState: "",
    officialCountry: "",
    officialEmail: "",
    aadharFile: "",
    panFile: "",
    photo: "",
    bankProof: "",
  });

  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSameAddress = (e) => {
    const isChecked = e.target.checked;
    setSameAddress(isChecked); // ✅ this line was missing
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Personal Loan Application:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 rounded shadow space-y-6">

       <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/Loan/personal-loan.jpg"
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
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="p-2 border rounded" required />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="p-2 border rounded" required />
         <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
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

      {/* Employment & Loan Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Employment & Loan Details</h3>

          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            placeholder="Monthly Income (₹)"
            className="w-full p-2 border rounded mb-2"
            required
          />

          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          >
            <option value="">Employment Type</option>
            <option value="Govt">Government</option>
            <option value="Private">Private Sector</option>
          </select>

        {/* Conditional Employment Details */}
        {formData.employmentType && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="organization"
              value={formData.organization || ""}
              onChange={handleChange}
              placeholder={formData.employmentType === "Govt" ? "Organization Name" : "Company Name"}
              className="p-2 border rounded"
              required
            />

            <input
              type="text"
              name="designation"
              value={formData.designation || ""}
              onChange={handleChange}
              placeholder="Designation"
              className="p-2 border rounded"
              required
            />

              {formData.employmentType === "Govt" ? (
                <select
                  name="department"
                  value={formData.department || ""}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                >
                  <option value="">Select Department</option>
                  <option>Railways</option>
                  <option>PSU</option>
                  <option>Defense</option>
                  <option>Police</option>
                  <option>State Govt</option>
                  <option>Central Govt</option>
                  <option>Other</option>
                </select>
              ) : (
                <select
                  name="profession"
                  value={formData.profession || ""}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                >
                  <option value="">Select Profession</option>
                  <option>Engineer</option>
                  <option>Doctor</option>
                  <option>Chartered Accountant</option>
                  <option>Lawyer</option>
                  <option>Other</option>
                </select>
              )}

              <div className="col-span-full">
              <label className="block font-medium mb-2">Office Address</label>

              {/* Address Line */}
              <input
                type="text"
                name="officialAddress"
                value={formData.officialAddress || ""}
                onChange={handleChange}
                placeholder="Address Line"
                className="w-full p-2 border rounded mb-2"
                required
              />

                {/* Landmark */}
                <input
                  type="text"
                  name="officialLandmark"
                  value={formData.officialLandmark || ""}
                  onChange={handleChange}
                  placeholder="Landmark"
                  className="w-full p-2 border rounded mb-2"
                />

                {/* Grid for City, Pincode, State, Country */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    name="officialCity"
                    value={formData.officialCity || ""}
                    onChange={handleChange}
                    placeholder="City"
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="officialPincode"
                    value={formData.officialPincode || ""}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="officialState"
                    value={formData.officialState || ""}
                    onChange={handleChange}
                    placeholder="State"
                    className="p-2 border rounded"
                    required
                  />
                 <select
                    name="officialCountry"
                    value={formData.officialCountry}
                    onChange={handleChange}
                    className="p-2 border rounded"
                    required
                    >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>


              <input
                type="email"
                name="officialEmail"
                value={formData.officialEmail || ""}
                onChange={handleChange}
                placeholder="Official Email ID"
                className="p-2 border rounded"
                required
              />

              {/* Years in Job (Dropdown Style) */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Years in Job *</label>

              {/* Display Field (Read-only) */}
              <input
                type="text"
                value={
                  formData.experienceYears || formData.experienceMonths
                    ? `${formData.experienceYears || 0} year(s) ${formData.experienceMonths || 0} month(s)`
                    : ""
                }
                readOnly
                placeholder="Select experience"
                className="p-2 border rounded w-full bg-gray-100 cursor-pointer"
                onClick={() => setShowExperienceDropdown(!showExperienceDropdown)}
              />

              {/* Two dropdowns: Year and Month */}
              {showExperienceDropdown && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <select
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={(e) => {
                      const years = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        experienceYears: years,
                        experience: `${years} year(s) ${prev.experienceMonths || 0} month(s)`,
                      }));
                    }}
                    className="p-2 border rounded"
                  >
                    <option value="">Years</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>

                  <select
                    name="experienceMonths"
                    value={formData.experienceMonths}
                    onChange={(e) => {
                      const months = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        experienceMonths: months,
                        experience: `${prev.experienceYears || 0} year(s) ${months} month(s)`,
                      }));
                    }}
                    className="p-2 border rounded"
                  >
                    <option value="">Months</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
            )}

          {/* Salary Slip Upload */}
          {formData.employmentType && (
            <div className="mb-4">
              <label className="block mb-1">Upload 3 Month Salary Slip (PDF/Image)</label>
              <input
                type="file"
                name="salarySlip"
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          )}

          {/* Loan Amount */}
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            placeholder="Loan Amount (₹)"
            className="w-full p-2 border rounded"
            required
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



      {/* Bank Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} placeholder="Account Holder Name" className="p-2 border rounded" required />
          <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" className="p-2 border rounded" required />
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="p-2 border rounded" required />
          <input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} placeholder="IFSC Code" className="p-2 border rounded" required />
        </div>

        <label className="block mt-4 mb-1">Bank Statement(6 Month)</label>
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
      </div>

      {/* Upload Documents */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1">Aadhaar Card</label>
            <input type="file" name="aadharFile" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block mb-1">PAN Card</label>
            <input type="file" name="panFile" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block mb-1">Photograph</label>
            <input type="file" name="photo" accept=".jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Apply
      </button>
    </form>
  );
};

export default PersonalLoanForm;
