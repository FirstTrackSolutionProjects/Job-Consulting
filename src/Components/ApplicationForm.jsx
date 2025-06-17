import React from "react";

const ApplicationForm = () => {
  return (
    <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Job Application Form</h2>
      <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded" required />
      <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" required />
      <input type="tel" placeholder="Phone Number" className="w-full border px-4 py-2 rounded" required />
      <input type="city" placeholder="Current City" className="w-full border px-4 py-2 rounded" required />
      <input type="file" className="w-full border px-4 py-2 rounded" required />
      <textarea placeholder="Cover Letter" className="w-full border px-4 py-2 rounded" rows="4"></textarea>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;