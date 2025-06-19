import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./SideBar"; 
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isJobsOpen, setIsJobsOpen] = useState(false); // new state for dropdown

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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

          {/* Jobs Dropdown - hover stays open */}
          <div
            className="relative"
            onMouseEnter={() => setIsJobsOpen(true)}
            onMouseLeave={() => setIsJobsOpen(false)}
          >
            <Link to="/jobs" className="hover:underline" onClick={closeMenu}>Jobs</Link>
            {isJobsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                <Link
                  to="/current-openings"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Current Openings
                </Link>
                <Link
                  to="/position"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Position
                </Link>
              </div>
            )}
          </div>

          <Link to="/fintech" className="hover:underline" onClick={closeMenu}>Fintech</Link>
          <Link to="/career-form" className="hover:underline" onClick={closeMenu}>Career</Link>
          <Link to="/contact" className="hover:underline" onClick={closeMenu}>Contact</Link>
          <Link to="/partner" className="hover:underline" onClick={closeMenu}>Partner</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-black p-2 rounded">
          <Menu size={40} />
        </button>
      </nav>

      <Sidebar isOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
    </>
  );
};

export default NavBar;
