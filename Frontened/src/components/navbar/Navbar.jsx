import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../pages/component/logo";
import LoginSignupButton from "./loginsignupbutton";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <Logo />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-[#111827] font-medium">
        <a href="#home" className="hover:text-[#0d47a1] transition duration-300">
          Home
        </a>

        <a href="#about" className="hover:text-[#0d47a1] transition duration-300">
          About Us
        </a>

        <a href="#help" className="hover:text-[#0d47a1] transition duration-300">
          Help
        </a>

        <Link to="/upload-resume" className="hover:text-[#0d47a1] transition duration-300">
          Upload Resume
        </Link>
        <LoginSignupButton/>

        
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden border-t border-gray-200">
          
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>

          <a href ="#help" onClick={() => setMenuOpen(false)}>
            Help
          </a>

          <Link to="/upload-resume" onClick={() => setMenuOpen(false)}>
            Upload Resume
          </Link>

          {/* <div className="flex flex-col gap-3"> */}
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-[#0d47a1] text-white rounded-lg text-center"
            >
              Sign Up
            </Link>
          {/* </div> */}

        </div>
      )}
    </nav>
  );
}

export default Navbar;