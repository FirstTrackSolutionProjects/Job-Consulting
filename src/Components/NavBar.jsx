import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; 
import Sidebar from "./SideBar"; 

const NavBar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

const closeMenu = () => {
    setMenuOpen(false);
};

return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 shadow-md bg-white">

        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img
            src="/images/companylogo.jpg"
            alt="Consulting Logo"
            className="w-12 h-12 rounded-full"
            />
            <span className="font-bold text-md">First Track Solution Technologies <br/> 
            </span>
        </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/jobs" className="hover:underline">Jobs</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/services" className="hover:underline">Services</Link>

        {/* Career Dropdown */}
        <div className="relative group">
          <button className="hidden md:flex space-x-6 text-black font-medium hover:underline">Career</button>

          {/* Dropdown */}
          <div className="absolute left-0 mt-2 w-48 bg-gray-900 text-white rounded-lg shadow-lg z-50 hidden group-hover:block">
            <Link
              to="/jobs"
              className="block px-4 py-2 text-sm hover:bg-gray-700"
              onClick={closeMenu}
            > 
              Current Openings
            </Link>
            <Link
              to="/join-us"
              className="block px-4 py-2 text-sm hover:bg-gray-700"
              onClick={closeMenu}
            >
              Join Us
            </Link>
          </div>
        </div>




        <Link to="/login" className="hover:underline">Login</Link>
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
