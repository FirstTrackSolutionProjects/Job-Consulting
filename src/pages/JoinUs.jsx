import React, { useState } from "react";
import ProtectedPage from "../Components/ProtectedPage";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    postAppliedFor: "",
    qualification: "",
    dob: "",
    gender: "",
  });

  const [fileData, setFileData] = useState({});
  const [fileNames, setFileNames] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFileData((prev) => ({ ...prev, [name]: files[0] }));
    setFileNames((prev) => ({ ...prev, [name]: files[0]?.name || "No file chosen" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = new FormData();

    Object.entries(formData).forEach(([key, value]) =>
      submission.append(key, value)
    );
    Object.entries(fileData).forEach(([key, file]) =>
      submission.append(key, file)
    );

    console.log("Form Submitted");
    alert("Application submitted successfully!");
  };

  const fileFields = [
    { label: "10th Document *", name: "doc10", required: true },
    { label: "12th Document *", name: "doc12", required: true },
    { label: "Graduation Document", name: "docGrad" },
    { label: "Post Graduation Document", name: "docPostGrad" },
    { label: "PAN Card *", name: "pan", required: true },
    { label: "Aadhar Card *", name: "aadhar", required: true },
    { label: "Bank Passbook *", name: "bank", required: true },
    {
      label: "If any experience - Offer/Relieving/Experience Certificate",
      name: "experience",
    },
    { label: "Latest Salary Slip - 3 Months", name: "salarySlip" },
    { label: "Photo *", name: "photo", required: true },
    { label: "Resume *", name: "resume", required: true },
  ];

  const labelClass = "block text-sm font-bold text-gray-700 mb-1";

  return (
    <ProtectedPage>
      <div className="flex justify-center items-start min-h-screen bg-gray-100 px-4 py-10 overflow-y-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Join Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Street Address *</label>
                <input
                  type="text"
                  name="streetAddress"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>State *</label>
                <input
                  type="text"
                  name="state"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  required
                  pattern="[0-9]{6}"
                  maxLength="6"
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className={labelClass}>Gender *</label>
                <select
                  name="gender"
                  required
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Qualification */}
            <div>
              <label className={labelClass}>Qualification *</label>
              <select
                name="qualification"
                required
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md w-full"
              >
                <option value="">Select Qualification</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="graduation">Graduation</option>
                <option value="postGraduation">Post Graduation</option>
              </select>
            </div>

            {/* File Uploads */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Upload Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fileFields.map(({ label, name, required }) => (
                  <div key={name}>
                    <label className={labelClass}>{label}</label>
                    <div className="flex items-center space-x-3 border border-gray-300 p-2 rounded-md w-full bg-white hover:bg-gray-50">
                      <span className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md text-sm">
                        Choose file
                      </span>
                      <span className="text-gray-500 text-sm truncate">
                        {fileNames[name] || "No file chosen"}
                      </span>
                      <input
                        type="file"
                        name={name}
                        required={required}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </ProtectedPage>
  );
};

export default JoinUs;