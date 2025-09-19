import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 px-6">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src="/images/companylogo.jpg"
            alt="Consulting Logo"
            className="w-16 mb-4 rounded-full"
          />
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            We bridge top talent with great employers across industries. Trusted career partner.
          </p>
        </div>

        {/* Social Media */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4 text-gray-300 text-xl">
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

        {/* Quick Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/career-form" className="hover:text-purple-400">Career</Link></li>
            <li><Link to="/job-seekers" className="hover:text-purple-400">Upload Your Resume</Link></li>
            <li><Link to="/career-tips" className="hover:text-purple-400">Career Tips</Link></li>
            <li><Link to="/terms" className="hover:text-purple-400">Terms Of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: contact@firsttracksolutiontechnologies.com</li>
            <li>Phone: +91 9040170727</li>
            <li>Address: BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha-751007</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-6 pb-4">
        © {new Date().getFullYear()} First Track Solution Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;