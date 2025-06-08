import React, { useState } from "react";

import Filters from "../Components/Filters";

const Jobs = () => {
  const [filters, setFilters] = useState({});

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechNova", location: "Delhi", experience: "2-4 yrs", salary: "₹6-8 LPA" },
    { id: 2, title: "HR Executive", company: "HRZone", location: "Mumbai", experience: "0-2 yrs", salary: "₹3-4 LPA" },
    // Add more jobs here
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters */}
        <div className="col-span-1">
          <Filters filters={filters} onChange={handleFilterChange} />
        </div>

      
        
      </div>
    </div>
  );
};

export default Jobs;
