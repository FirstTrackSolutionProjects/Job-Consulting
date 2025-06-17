// import React, { useState } from "react";
// import Filters from "../Components/Filters";
// import jobs from "../data/jobs"; // ✅ Import here

// const Jobs = () => {
//   const [filters, setFilters] = useState({});
//   const [appliedFilters, setAppliedFilters] = useState({});

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const handleSubmitFilters = () => {
//     setAppliedFilters(filters);
//   };

//   const filteredJobs = jobs.filter((job) => {
//     const matchLocation =
//       !appliedFilters.location ||
//       job.location.toLowerCase().includes(appliedFilters.location.toLowerCase());

//     const matchExperience =
//       !appliedFilters.experience || job.experience === appliedFilters.experience;

//     const matchType =
//       !appliedFilters.jobType || job.jobType === appliedFilters.jobType;

//     return matchLocation && matchExperience && matchType;
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="md:col-span-1">
//           <Filters
//             filters={filters}
//             onChange={handleFilterChange}
//             onSubmit={handleSubmitFilters}
//           />
//         </div>

//         <div className="md:col-span-3 space-y-6">
//           {filteredJobs.length === 0 ? (
//             <p className="text-gray-500 mt-4">No jobs match your filters.</p>
//           ) : (
//             filteredJobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {job.title}
//                   </h3>
//                   <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
//                     {job.jobType}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-1">
//                   {job.company} • {job.location}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Experience: {job.experience} years
//                 </p>
//                 <p className="text-sm text-gray-500">Salary: {job.salary}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;

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
  const [hasSearched, setHasSearched] = useState(false); // ✅ new state

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmitFilters = () => {
    setAppliedFilters(filters);
    setHasSearched(true); // ✅ enable job display only after search
  };

  const filteredJobs = jobs.filter((job) => {
    const matchTitle =
      !appliedFilters.title ||
      job.title.toLowerCase().includes(appliedFilters.title.toLowerCase()) ||
      job.company.toLowerCase().includes(appliedFilters.title.toLowerCase());

    const matchLocation =
      !appliedFilters.location ||
      job.location.toLowerCase().includes(appliedFilters.location.toLowerCase());

    const matchType =
      !appliedFilters.jobType || job.jobType === appliedFilters.jobType;

    return matchTitle && matchLocation && matchType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      {/* 🔍 Search Bar with Button */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          name="title"
          className="flex-grow border border-gray-300 px-4 py-2 rounded-md"
        />
        <button
          onClick={handleSubmitFilters}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Filters
            filters={filters}
            onChange={handleFilterChange}
            onSubmit={handleSubmitFilters}
          />
        </div>

        <div className="md:col-span-3 space-y-6">
          {!hasSearched ? (
            <p className="text-gray-400 text-sm">Please search to see job listings.</p>
          ) : filteredJobs.length === 0 ? (
            <p className="text-gray-500 mt-4">No jobs match your filters.</p>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {job.jobType}
                  </span>
                </div>
                <p className="text-gray-600 mb-1">
                  {job.company} • {job.location}
                </p>
                <p className="text-sm text-gray-500">
                  Experience: {job.experience} years
                </p>
                <p className="text-sm text-gray-500">Salary: {job.salary}</p>
                <div className="flex justify-end items-center mt-4">
                  <Link
                    to={`/jobs/${job.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
