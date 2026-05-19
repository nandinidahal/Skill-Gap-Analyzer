import features from "../../Data/whatyouget";
const WhatYouGet = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 bg-white mt-9 cursor-pointer ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 ">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 flex justify-center items-center">
            What&nbsp;
            <span className="text-blue-800"> you'll get</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg max-w-7xl flex justify-center items-center">
            Upload your resume and receive a comprehensive, AI-powered report
            covering every angle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white border  border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-1  transition duration-300 flex flex-col gap-3 mb-4"
            >
              {/* Number badge */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ backgroundColor: f.color.bg, color: f.color.text }}
              >
                {f.id}
              </div>

              <h3 className="text-base font-bold text-gray-800">{f.title}</h3>

              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
