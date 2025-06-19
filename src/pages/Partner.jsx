import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Freelancer from "./Freelancer";
import BusinessAssociate from "./BusinessAssociate";

const Partner = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setUserType(type);
    navigate(`/partner/${type}`); // Lowercase paths like /partner/freelancer
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12">
      {!userType ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Looking to associate with us?
          </h2>
          <p className="text-xl font-semibold mb-6">Choose your role</p>

          <div className="space-y-4">
            <div
              onClick={() => handleSelect("freelancer")}
              className="cursor-pointer border p-4 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">🤝 Freelancer</h3>
              <p className="text-gray-600 text-sm">
                Register your company and post job openings to find the right talent.
              </p>
            </div>

            <div
              onClick={() => handleSelect("business")}
              className="cursor-pointer border p-4 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">🏢 Business Associate</h3>
              <p className="text-gray-600 text-sm">
                Apply for jobs and get career guidance from our consulting team.
              </p>
            </div>
          </div>
        </div>
      ) : userType === "freelancer" ? (
        <Freelancer />
      ) : (
        <BusinessAssociate />
      )}
    </div>
  );
};

export default Partner;
