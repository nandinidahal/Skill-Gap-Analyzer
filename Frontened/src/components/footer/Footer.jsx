import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../pages/component/logo";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10 sm:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-gray-700">

        {/* Brand / About */}
        <div className="space-y-1 sm:col-span-2 lg:col-span-1 ">
          <div className="flex items-center gap-3 -mt-1 sm:-mt-4">
            <Logo />
          </div>

          <p className="leading-7 text-gray-600 mt-3  hover:text-blue-600 transition cursor-pointer">
            Analyze your resume against your dream job role and discover the
            exact skills you need to improve. Get a personalized roadmap powered
            by AI — fast, simple, and effective.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-600 hover:text-blue-600 transition cursor-pointer">
            <li>Kathmandu, Nepal</li>
            <li className="break-all">skillgapanalyzer@gmail.com</li>
            <li>01-22339</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-blue-600 transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                About
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-blue-600 transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Help
              </Link>
            </li>
            <li>
              <Link to="/upload" className="hover:text-blue-600 transition"onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Upload Resume
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-blue-600 transition"onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Why Use This */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Why Use This?
          </h4>
          <p className="text-gray-600 leading-7  hover:text-blue-600 transition cursor-pointer">
            No signup. No payment. Just upload your resume and get instant,
            actionable insights to bridge your skill gap and reach your career
            goals faster.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-5 sm:py-6 text-center text-sm text-gray-500 px-4">
        © {new Date().getFullYear()} Skill Gap Analyzer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;