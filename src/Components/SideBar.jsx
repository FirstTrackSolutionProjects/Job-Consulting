import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = ({ isOpen, toggleMenu, closeMenu }) => {
  const [careerOpen, setCareerOpen] = useState(false);


  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-400 text-white z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <div className="p-6 flex flex-col gap-4">
        <button onClick={toggleMenu} className="self-end text-white">
          <X size={24} />
        </button>
        <Link to="/" onClick={toggleMenu} className="hover:text-blue-400">Home</Link>
        <Link to="/jobs" onClick={toggleMenu} className="hover:text-blue-400">Jobs</Link>
        <Link to="/about" onClick={toggleMenu} className="hover:text-blue-400">About</Link>
        <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-400">Contact</Link>
        <Link to="/services" onClick={toggleMenu} className="hover:text-blue-400">Services</Link>
        
        {/* Mobile-Friendly Career Dropdown */}
        <div>
          <button
            onClick={() => setCareerOpen(!careerOpen)}
            className="flex items-center justify-between w-full font-medium text-white"
          >
            Career {careerOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {careerOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <Link to="/jobs" onClick={toggleMenu} className="block hover:text-blue-400">
                Current Openings
              </Link>
              <Link to="/join-us" onClick={toggleMenu} className="block hover:text-blue-400">
                Join Us
              </Link>
            </div>
          )}
        </div>

        

        {/* <Link to="/login" onClick={toggleMenu} className="hover:text-blue-400">Login</Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
