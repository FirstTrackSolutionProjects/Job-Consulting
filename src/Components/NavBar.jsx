import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import Sidebar from "./SideBar";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [fintechOpen, setFintechOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleFintechClick = () => setFintechOpen(!fintechOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img src="/images/companylogo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="font-bold text-md leading-tight">
              First Track <br /> Solution Technologies
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-black font-medium items-center">
          <Link to="/" className="hover:underline" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="hover:underline" onClick={closeMenu}>About</Link>

          <Link to="/jobs" className="hover:underline" onClick={closeMenu}>Jobs</Link>
          <Link to="/current-openings" className="hover:underline" onClick={closeMenu}>Current Openings</Link>
          <Link to="/position" className="hover:underline" onClick={closeMenu}>Position</Link>

          {/* Fintech Dropdown */}
          <div className="relative">
            <button
              onClick={() => setFintechOpen(!fintechOpen)}
              className="flex items-center gap-1 hover:underline"
            >
              Fintech {fintechOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
        {fintechOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
            <Link
              to="/loan"
                onClick={() => { closeMenu(); setFintechOpen(false); }}
                className="block px-4 py-2 hover:bg-gray-100"
            >
              Loan
            </Link>
            <Link
              to="/insurance"
              onClick={() => { closeMenu(); setFintechOpen(false); }}
              className="block px-4 py-2 hover:bg-gray-100"
            >
                Insurance
            </Link>
            <Link
              to="/credit-card"
              onClick={() => { closeMenu(); setFintechOpen(false); }}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Credit Card
            </Link>
          </div>
          )}
        </div>


          {/* <a
          href="https://firsttracksolutiontechnologies.com/career"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="hover:text-blue-400"
        >
          Career
        </a> */}

            <Link to="/career-form" className="hover:underline"  onClick={closeMenu}>Career</Link>

          <Link to="/contact" className="hover:underline" onClick={closeMenu}>Contact</Link>
          <Link to="/partner" className="hover:underline" onClick={closeMenu}>Partner</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-black p-2 rounded">
          <Menu size={40} />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <Sidebar isOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
    </>
  );
};

export default NavBar;
