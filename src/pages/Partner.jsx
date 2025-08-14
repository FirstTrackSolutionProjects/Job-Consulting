import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Freelancer from "./Freelancer";
import BusinessAssociate from "./BusinessAssociate";

const Partner = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setUserType(type);
    navigate(`/partner/${type}`);
  };

  return (
    <div className="max-w-5xl lg:max-w-7xl mx-auto px-6 lg:px-8  py-10 lg:py-14 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Partner</h1>
      {!userType ? (
        <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/Partners/partner.jpg"
            alt="Partner with us"
            className="w-full h-96 lg:h-[550px] object-cover "
          />

          {/* Right Side - Text and Options */}
          <div className="flex flex-col justify-center  p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-3">
              Looking to associate with us?
            </h2>
            <p className="text-lg text-gray-700 mb-6">Choose your role below</p>

            <div className="space-y-4">
              <div
                onClick={() => handleSelect("freelancer")}
                className="cursor-pointer border border-gray-300 rounded-lg p-4 hover:shadow-lg transition flex items-start gap-4"
              >
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Freelancer</h3>
                  <p className="text-sm text-gray-600">
                    Register yourself to associate with us
                  </p>
                </div>
              </div>

              <div
                onClick={() => handleSelect("business")}
                className="cursor-pointer border border-gray-300 rounded-lg p-4 hover:shadow-lg transition flex items-start gap-4"
              >
                <span className="text-2xl">🏢</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Business Associate</h3>
                  <p className="text-sm text-gray-600">
                   Register your firm / company to associate with us
                  </p>
                </div>
              </div>
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
