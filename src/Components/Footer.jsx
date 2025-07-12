import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">

        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img
            src="/images/companylogo.jpg"
            alt="Consulting Logo"
            className="w-16 mb-4 rounded-full"
          />
          <p className="text-sm text-gray-300">
            We bridge top talent with great employers across industries. Trusted career partner.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <Link to="/facebook" className="hover:text-blue-500">
              <FaFacebookF />
            </Link>
            <Link to="/twitter" className="hover:text-sky-400">
              <FaTwitter />
            </Link>
            <Link to="/linkedin" className="hover:text-blue-400">
              <FaLinkedinIn />
            </Link>
            <Link to="/instagram" className="hover:text-pink-400">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Job Seekers */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/career-form">Career</Link></li>
          <li><Link to="/job-seekers">Upload Your Resume</Link></li>
           <li><Link to="/career-tips">Career Tips</Link></li>
            <li><Link to="/terms">Terms Of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>

            
          </ul>
        </div>

        {/* Employers */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">For Employers</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/employers">Post a Job</Link></li>
            <li><Link to="/applications">View Applications</Link></li>
          
          </ul>
        </div> */}

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: contact@firsttracksolutiontechnologies.com</li>
            <li>Phone: +91 9040170727</li>
            <li>Address: BMC Bhawani Mall, Saheed Nagar Bhubaneswar, Odisha-751007</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-6 pb-4">
        Copyright © 2025, Developed by 
         <a href="https://firsttracksolutiontechnologies.com" className='text-blue-400 hover:underline ml-1'>
            First Track Solution Technologies
          </a>
      </div>
    </footer>
  );
};

export default Footer;
