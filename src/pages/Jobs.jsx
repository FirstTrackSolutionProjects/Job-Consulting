import React, { useState } from "react";
import Filters from "../Components/Filters";
import jobs from "../data/jobs";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [filters, setFilters] = useState({
    title: "",
    jobType: "",
    location: "",
  });
  const [appliedFilters, setAppliedFilters] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmitFilters = () => {
    setAppliedFilters(filters);
    setHasSearched(true);
  };

  // ✅ Case-insensitive and safe filtering logic
  const filteredJobs = jobs.filter((job) => {
  const titleFilter = (appliedFilters.title || "").trim().toLowerCase();
  const locationFilter = (appliedFilters.location || "").trim().toLowerCase();
  const typeFilter = (appliedFilters.jobType || "").trim().toLowerCase();

  const matchTitle =
    !titleFilter ||
    (job.title?.toLowerCase().includes(titleFilter) ||
     job.company?.toLowerCase().includes(titleFilter));

  const matchLocation =
    !locationFilter ||
    (Array.isArray(job.location)
      ? job.location.some((loc) =>
          loc.toLowerCase().includes(locationFilter)
        )
      : job.location?.toLowerCase().includes(locationFilter));

  const matchType =
    !typeFilter || job.jobType?.toLowerCase() === typeFilter;

  return matchTitle && matchLocation && matchType;
});


  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-12">
      {/* ✅ Banner Image */}
      <img
        src="/images/jobs-banner.jpg"
        alt="Job Opportunities"
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 🔍 Filters Section */}
        <div className="md:col-span-1">
          <Filters
            filters={filters}
            onChange={handleFilterChange}
            onSubmit={handleSubmitFilters}
          />
        </div>

        {/* 📋 Job Listings Section */}
        <div className="md:col-span-3 space-y-6">
          {!hasSearched ? (
            <p className="text-gray-400 text-sm">
              Please search to see job listings.
            </p>
          ) : filteredJobs.length === 0 ? (
            <p className="text-gray-500 mt-4">No jobs match your filters.</p>
          ) : (
            <>
              <p className="text-sm text-gray-500">
                Showing {filteredJobs.length} job{filteredJobs.length > 1 ? "s" : ""}
              </p>
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                      <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {job.jobType}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {job.company} • {job.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      Experience: {job.experience} years
                    </p>
                    {/* <p className="text-sm text-gray-500">
                      Salary: {job.salary}
                    </p> */}
                    <div className="flex justify-end mt-4">
                      <Link
                        to={`/jobs/${job.id}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
