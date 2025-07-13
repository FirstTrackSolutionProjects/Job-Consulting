import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = ({ isOpen, toggleMenu }) => {
  const [jobsOpen, setJobsOpen] = useState(false);
  const [fintechOpen, setFintechOpen] = useState(false); // 👈 new state
  const navigate = useNavigate();

  const handleJobsClick = () => {
    setJobsOpen(!jobsOpen);
  };

  const handleFintechClick = () => {
    setFintechOpen(!fintechOpen);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-[100vh] w-64 bg-gray-700 text-white z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <div className="p-6 flex flex-col gap-4">
        {/* Close Button */}
        <button onClick={toggleMenu} className="self-end text-white">
          <X size={24} />
        </button>

        {/* Menu Links */}
        <Link to="/" onClick={toggleMenu} className="hover:text-blue-400">
          Home
        </Link>

        <Link to="/about" onClick={toggleMenu} className="hover:text-blue-400">
          About
        </Link>

       <Link to="/jobs" onClick={toggleMenu} className="hover:text-blue-400">Jobs</Link>
       <Link to="/current-openings" onClick={toggleMenu} className="hover:text-blue-400">Current Openings</Link>
       <Link to="/position" onClick={toggleMenu} className="hover:text-blue-400">Position</Link>

        {/* Fintech Dropdown */}
        <div>
          <button
            onClick={handleFintechClick}
            className="flex items-center justify-between w-full font-medium text-white"
          >
            Fintech {fintechOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {fintechOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <Link to="/loan" onClick={toggleMenu} className="block hover:text-blue-400">
                Loan
              </Link>
              <Link to="/insurance" onClick={toggleMenu} className="block hover:text-blue-400">
                Insurance
              </Link>
              <Link to="/credit-card" onClick={toggleMenu} className="block hover:text-blue-400">
                Credit Card
              </Link>
            </div>
          )}
        </div>

        <a
          href="https://firsttracksolutiontechnologies.com/career"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="hover:text-blue-400"
        >
          Career
        </a>

         {/* <Link to="/career" onClick={toggleMenu} className="hover:text-blue-400">Career</Link> */}


         <a
          href="https://firsttracksolutiontechnologies.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="hover:text-blue-400"
        >
          Contact
        </a>

        <Link to="/partner" onClick={toggleMenu} className="hover:text-blue-400">
          Partner
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
