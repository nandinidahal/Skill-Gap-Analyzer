import React from "react";

function Card({ title, description }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-white">

      <h3 className="text-xl font-semibold text-[#111827]">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
}

export default Card;

// import React from "react";

// function Card({ step, title, description }) {
//   return (
//     <div className="bg-white p-10 border border-gray-100 rounded-2xl shadow-sm hover:translate-y-2  hover:shadow-xl transition duration-300  text-center flex flex-col items-center">
      
//       {/* BIG centered number */}
//       <div className="w-16 h-16  flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold mb-6">
//         {step}
//       </div>

//       <h3 className="text-xl font-semibold text-blue-800 mb-3">
//         {title}
//       </h3>

//       <p className="text-gray-600 leading-relaxed max-w-xs">
//         {description}
//       </p>
//     </div>
//   );
// }

// export default Card;