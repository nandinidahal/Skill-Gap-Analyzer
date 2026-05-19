import React from "react";

import steps from "../../Data/help";
const Help = () => {
  return (
    // <section className="py-24 px-6 lg:px-20 bg-[#f5f7ff]  mb-10 ">
    <section className="pt-10 pb-6 sm:pt-12 sm:pb-8 px-4 sm:px-6 lg:px-20 bg-[#f5f7ff] cursor-pointer">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className=""> How </span> 
          <span className="text-blue-800">It { ''} </span>
          <span >Works</span></h2>
        <p className="mt-4 text-gray-600 text-lg">
          Get your results in three simple steps — no signup or credit card
          required.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-16 text-center xl:mb-8  ">
        {steps.map((item, index) => (
          <div key={index} className=" flex flex-col items-center">
            {/* Step circle */}
            <div className="w-10 h-10 rounded-full bg-blue-800/75 text-white flex items-center justify-center text-xl font-bold shadow-md ">
              {item.step}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold ">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-gray-600 max-w-xs">{item.description}</p>

            {/* Connector line (desktop only) */}
            {/* {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-blue-400"></div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Help;
