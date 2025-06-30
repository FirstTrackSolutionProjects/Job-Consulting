import React, { useState } from "react";

const UsedCarLoanForm = () => {
  const [sameAddress, setSameAddress] = useState(false)
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
    country: "",
    permanentAddress: "",
    presentAddress: "",
    aadhar: "",
    pan: "",
    profession: "",
    professionType: "",
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
    gst: "",
    msme: "",
    cin: "",
    companypan: "",
    companytan: "",
    carModel: "",
    carYear: "",
    carPrice: "",
    loanAmount: "",
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    purpose: "",
    bankProof: "",
    photo: "",
    aadharFile: "",
    panFile: "",
    quotations: "",
    itr1: "",
    itr2: "",
    itr3: "",
    computation1: "",
    computation2: "",
    computation3: "",
  });

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
  

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Used Car Loan Application:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-white p-6 rounded shadow space-y-6"
    >
       <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/Loan/usedcar-loan.jpg"
            alt="Loan"
            className="w-full h-96 object-cover lg:h-auto"
          />
          </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Personal Details
        </h3>

        {/* Title, Full Name, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
          </select>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded"
            required
          />
        </div>

            {/* Phone, DOB, Gender */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Phone Number with STD Code */}
          <div className="flex items-stretch gap-2">
            <select
              name="stdCode"
              value={formData.stdCode}
              onChange={handleChange}
              className="border p-2 rounded w-24 text-sm bg-white"
            >
              <option value="+91">+91 🇮🇳</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="border p-2 rounded w-full"
              required
            />
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
            {/* Add more country codes as needed */}
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


          {/* Date of Birth */}
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

            {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
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
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          KYC Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            placeholder="Aadhaar Card Number"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="PAN Card Number"
            className="p-2 border rounded"
            required
          />
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
              <option value="">Select Business Type</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="number"
              name="businessYears"
              value={formData.businessYears}
              onChange={handleChange}
              placeholder="Years in Business"
              className="w-full p-2 border rounded"
              required
            />

             <input
                type="text"
                name="businessannualturnover"
                value={formData.businessannualturnover}
                onChange={handleChange}
                placeholder="Annual Turnover"
                className="w-full p-2 border rounded"
                required
              />

            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              placeholder="Business Address"
              className="w-full p-2 border rounded"
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
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>

                <label className="block text-gray-900 mb-1 font-semibold">GST
              <input
                type="file"
                name="gst"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded font-normal"
                required
              />
              </label>
              <label className="block text-gray-900 mb-1 font-semibold">MSME
              <input
                type="file"
                name="msme"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded font-normal"
                required
              />
              </label>

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
              <option value="IT">IT</option>
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
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>


               <label className="block text-gray-900 mb-1 font-semibold">Company Identification Number (CIN) 
              <input
                type="file"
                name="cin"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded font-normal"
                required
              />
              </label>
              <label className="block text-gray-900 mb-1 font-semibold">Company PAN
              <input
                type="file"
                name="companypan"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded font-normal"
                required
              />
              </label>
              <label className="block text-gray-900 mb-1 font-semibold">Company TAN
              <input
                type="file"
                name="companytan"
                accept=".pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded font-normal"
                required
              />
              </label>
            </div>
          </div>
        )}

      {/* Car Loan Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Car Loan Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            placeholder="Car Model"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="carYear"
            value={formData.carYear}
            onChange={handleChange}
            placeholder="Car Year"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="carPrice"
            value={formData.carPrice}
            onChange={handleChange}
            placeholder="Car Price (₹)"
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="mt-4">
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

        <label className="block mt-4 mb-1">Bank Statement</label>
        <input type="file" name="bankProof" accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
      </div>

      {/* Document Upload */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Upload Documents
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
             <label className="block text-gray-700 mb-1">Your Photo (Passport Size)</label>
              <input
                type="file"
                name="photo"
                accept=".jpg,.jpeg,.png"
                className="w-full p-2 border rounded"
                required
              />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Aadhaar Card (PDF/Image)
            </label>
            <input
              type="file"
              name="aadharFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              PAN Card (PDF/Image)
            </label>
            <input
              type="file"
              name="panFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Quotations Upload (Max 5 Photos) */}
          <div>
            <label className="block text-gray-700 mb-1">
              Upload Quotations (Max 5 Photos)
            </label>
            <input
              type="file"
              name="quotations"
              accept=".jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
              multiple
              onChange={(e) => {
                if (e.target.files.length > 5) {
                  alert("You can upload a maximum of 5 photos.");
                  e.target.value = null; // Clear input if limit exceeded
                }
              }}
            />
          </div>
        </div>
      </div>

       {/* ✅ Upload ITRs */}
        <div>
          <label className="block  mb-1 font-bold">Upload Last 3 Years of ITR/Computation</label>

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
              <label className="text-sm font-semibold">ITR - Year 3</label>
              <input
                type="file"
                name="itr3"
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
            <div>
            <label className="text-sm font-semibold">Computation - Year 3</label>
            <input
              type="file"
              name="computation3"
              accept=".pdf"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              
            />
          </div>
          </div>
        </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </form>
  );
};

export default UsedCarLoanForm;
