import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PartnerForm from "./PartnerForm"; // Reuse or rename for job use

const Partner = () => {
  const [userType, setUserType] = useState(null); // Candidate or Company
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setUserType(type);
    navigate(`/partner/${type.toLowerCase()}`); // e.g., /partner/company or /partner/candidate
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12">
      {!userType ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Looking for Jobs or Hiring?</h2>
          <p className="text-xl font-semibold mb-6">
             Choose your role to get started
          </p>

          <div className="space-y-4">
            <div
              onClick={() => handleSelect("Company")}
              className="cursor-pointer border p-4 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">🏢 Hire Talent</h3>
              <p className="text-gray-600 text-sm">
                Register your company and post job openings to find the right talent.
              </p>
            </div>

            <div
              onClick={() => handleSelect("Candidate")}
              className="cursor-pointer border p-4 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">🧑‍💼 Find a Job</h3>
              <p className="text-gray-600 text-sm">
                Apply for jobs and get career guidance from our consulting team.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <PartnerForm selectedType={userType} />
      )}
    </div>
  );
};

export default Partner;
