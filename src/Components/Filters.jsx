import React from "react";

const Filters = ({ filters, onChange, onSubmit }) => {
  const internshipEligibleTitles = [
    "ui intern",
    "hr intern",
    "it intern",
    "graphic designer",
  ];

  const showInternshipOption = internshipEligibleTitles.includes(
    filters.title.toLowerCase()
  );

  return (
    <section
      className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center"
      style={{ backgroundImage: `url('/images/your-background.jpg')` }}
    >
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-400 bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl px-6">
        <div className="w-full py-2 font-extrabold text-center text-white text-3xl md:text-4xl lg:text-5xl">
          Find A Job
        </div>

        <div className="bg-white bg-opacity-70 p-6 rounded-xl space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-black bg-gray-300 text-center rounded">
            Find a Job
          </h2>

          {/* Job Title Dropdown */}
          <select
            name="title"
            value={filters.title}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md bg-gray-400 bg-opacity-60 text-white focus:outline-none"
          >
            <option value="">Select Job Title</option>
            <option value="frontend developer">Frontend Developer</option>
            <option value="backend developer">Backend Developer</option>
            <option value="ui intern">UI Intern</option>
            <option value="react native developer">React Native Developer</option>
            <option value="ui/ux designer">UI/UX Designer</option>
            <option value="graphic designer">Graphic Designer</option>
            <option value="it intern">IT Intern</option>
            <option value="hr intern">HR Intern</option>
            <option value="full stack developer">Full Stack Developer</option>
            <option value="hr operations manager">HR Operations Manager</option>
            <option value="digital marketing">Digital Marketing</option>
            <option value="relationship manager">Relationship Manager</option>
            <option value="relationship officer">Relationship Officer</option>
            <option value="telecaller">Telecaller</option>
            <option value="sales coordinator">Sales Coordinator</option>
            <option value="client relationship manager">Client Relationship Manager</option>
          </select>

          {/* Job Type Dropdown (Dynamic) */}
          <select
            name="jobType"
            value={filters.jobType}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md bg-gray-400 bg-opacity-60 text-white focus:outline-none"
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full-time</option>
            {showInternshipOption && <option value="internship">Internship</option>}
          </select>

          {/* Location Dropdown */}
          <select
            name="location"
            value={filters.location}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md bg-gray-400 bg-opacity-60 text-white focus:outline-none"
          >
            <option value="">Select Location</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          {/* Submit Button */}
          <button
            onClick={onSubmit}
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
