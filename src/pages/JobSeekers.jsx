import React from "react";
import { Link } from "react-router-dom";

const JobSeekers = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Job Seekers – Get Started
        </h1>

        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Upload your resume and let employers find you! Our platform connects you to top opportunities in various industries.
        </p>

        {/* Upload Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Resume</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-2 border rounded-lg text-gray-600 file:mr-4 file:py-2 file:px-4  file:border-0 file:bg-gray-600 file:text-white file:cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Resume
          </button>
        </form>

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Register with Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access to 1000+ verified job listings.</li>
            <li>Free resume feedback and optimization.</li>
            <li>Interview preparation guidance.</li>
            <li>Job alerts tailored to your profile.</li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Explore more:</p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/jobs"
              className="text-blue-600 font-medium hover:underline"
            >
              Browse Jobs
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;
