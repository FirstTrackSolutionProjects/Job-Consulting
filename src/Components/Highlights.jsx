import React from "react";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa6";

const phrases = [
  "Tech Experts",
  "Consultancy Solutions",
  "Streamline Strategy",
  "Cloud Innovation",
  "AI Driven Insights",
  "Secure Infrastructure",
  "Digital Growth",
];

const Highlights = () => {
  return (
    <div className="bg-gray-100 py-4 mt-5">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="text-black text-4xl font-semibold"
      >
        {phrases.map((text, index) => (
          <div key={index} className="flex items-center space-x-3 mx-6">
            <span>{text}</span>
            <FaStarOfLife className="text-blue-800 text-sm" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Highlights;
