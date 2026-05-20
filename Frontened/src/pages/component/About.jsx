import { Link } from "react-router-dom";
function About() {
  return (
    // <div className="min-h-screen bg-white px-6 md:px-16 py-24">
    // updated
    <div className="bg-white  px-4 sm:px-6 md:px-16 pt-10 pb-6 sm:pt-12 sm:pb-8 m-10"> 
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900">
            About Us
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SkillGapAnalyzer is designed to help users understand their current
            skill levels, identify missing skills, and improve their career
            readiness through smart analysis and guidance.
          </p>
          
        </div>
        <div className="flex justify-center p-4 m-4">
          <Link to="/Contactus" className="bg-blue-900  text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* <button className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"> */}
            Contact Us
          {/* </button> */}
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 mb-10">

          <div className="bg-[#f5f7ff] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-800">
              Skill Analysis
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Analyze technical and professional skills to discover strengths
              and improvement areas.
            </p>
            {/* <Card
            title="Skill Analysis"
            description="Analyze technical and professional skills to discover strengths and improvement areas."
          /> */}
          </div>

          <div className="bg-[#f5f7ff] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-800">
              Resume Improvement
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Get insights and recommendations to create stronger resumes for
              internships and jobs.
            </p>
          </div>

          <div className="bg-[#f5f7ff] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-800">
              Career Guidance
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Receive personalized suggestions to improve career opportunities
              and future growth.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;