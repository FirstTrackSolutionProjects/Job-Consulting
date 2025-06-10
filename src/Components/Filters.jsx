import React, { useState } from "react";

const Filters = () => {
  const [filters, setFilters] = useState({
    title: "",
    type: "",
    location: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
    // Your job fetching logic here
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center"
      style={{ backgroundImage: `url('/images/your-background.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-400 bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl px-6">
        {/* Header */}
        <div className="w-full py-2 font-extrabold text-center  text-white text-3xl md:text-4xl lg:text-5xl">
          Find A Job
        </div>

        {/* Form */}
        <div className="bg-white bg-opacity-70 p-6 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold text-black bg-gray-300 text-center ">Find a Job</h2>

          <input
            type="text"
            name="title"
            value={filters.title}
            onChange={handleChange}
            placeholder="Job title or company"
            className="w-full px-4 py-2 rounded-md bg-gray-400 bg-opacity-60 text-white placeholder-white focus:outline-none"
          />

          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-400 bg-opacity-60 text-white focus:outline-none"
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
          </select>

          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full px-4 py-2 rounded-md bg-gray-400 bg-opacity-60 text-white placeholder-white focus:outline-none"
          />

          <button
            onClick={handleSearch}
            className="w-full text-black bg-gray-300 font-semibold py-2 rounded-md"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;
