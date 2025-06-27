import React, { useState } from "react";

const InsuranceForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    insuranceType: "",
    nomineeName: "",
    nomineeRelation: "",
    idProof: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Insurance Application Submitted:", formData);
    // Handle file uploads + backend here
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
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-2 border rounded" required />
          <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          
          </select>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="p-2 border rounded" required />
        </div>
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

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit Application</button>
    </form>
  );
};

export default InsuranceForm;
