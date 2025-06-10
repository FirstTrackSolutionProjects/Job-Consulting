import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] w-full bg-black text-white mt-18 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/Hero-Section.jpg"
          alt="Consulting"
          className="w-full h-full object-cover object-center opacity-60"
        />
       
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-start min-h-[90vh] px-4 py-20 md:px-20">
        <p className="text-sm tracking-widest font-semibold text-gray-300 mb-4 uppercase">
          First Track Solution Technologies Consulting Services
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-3xl mb-6 leading-tight">
          Empowering Your Business with <br /> Strategic Consulting Solutions
        </h1>

        <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8">
          We are your reliable partners in success, delivering customized consulting
          solutions designed to accelerate your business growth and drive impactful results.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded flex items-center gap-2 shadow-lg"
        >
          GET IN TOUCH <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
