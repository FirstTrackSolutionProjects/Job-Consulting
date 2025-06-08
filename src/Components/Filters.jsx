import React from "react";

const Filters = ({ filters, onChange }) => {
  return (
    <div className="w-full md:w-80 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
        <select
          name="jobType"
          onChange={onChange}
          value={filters.jobType || ""}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        >
          <option value="">All</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          name="location"
          onChange={onChange}
          value={filters.location || ""}
          placeholder="Enter city"
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
        <select
          name="experience"
          onChange={onChange}
          value={filters.experience || ""}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        >
          <option value="">All</option>
          <option value="0-1">0-1 years</option>
          <option value="2-5">2-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
