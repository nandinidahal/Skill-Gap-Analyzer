import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="w-full grid md:grid-cols-2 min-h-[85vh]">

      {/* Left Side */}
      <div className="flex flex-col justify-center px-10 md:px-16">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#111827]">
          Identify Missing <br />
          Skills and Build <br />
          Your Career Path
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-xl leading-8">
          Upload your resume to discover skill gaps, compare
          your profile with industry requirements, and receive
          personalized recommendations for improvement.
        </p>

        {/* Email + Button Row */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">

          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full sm:w-[60%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
          />

          <Link to="/upload-resume">
            <button className="w-full sm:w-auto bg-[#0d47a1] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#09357d] transition">
              Upload Resume
            </button>
          </Link>

        </div>

      </div>

      {/* Right Side */}
      <div className="w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Skill Gap Analyzer"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}

export default HeroSection;