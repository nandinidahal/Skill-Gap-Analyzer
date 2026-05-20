import { useState } from "react";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
// import { IoMailOpenOutline } from "react-icons/io5";
// import { CiLocationOn } from "react-icons/ci";
// import { CiLocationOn } from "react-icons/ci";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numb, setNumb] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress]=useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let formIsValid = true;
    let Error = "";

    if (!name || !email || !numb || !message ||!address) {
      alert("All the fields are required!");
      return;
    }

    if (numb.length !== 10) {
      Error += "Phone number must be exactly 10 digits.\n";
      formIsValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Error += "Invalid email format.\n";
      formIsValid = false;
    }

    if (formIsValid) {
      alert("Contact Detail Sent Successfully!");
      setName("");
      setEmail("");
      setNumb("");
      setMessage("");
      setAddress("");
    } else {
      alert(Error);
    }
  }
  const handelClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className=" p-4 rounded-xl  cursor-pointer flex justify-center mt-4">
          <form
            onSubmit={handleSubmit}
            className="relative max-w-2xl border p-6 md:p-10 shadow-md hover:shadow-inner rounded-lg mt-2"
          >
            <RxCross2
              size={22}
              className="absolute top-4 right-4 cursor-pointer hover:text-red-500 transition"
              onClick={handelClick}
            />

            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">
              Contact <span className="text-blue-800">Us</span>
            </h2>
            <p className="text-white  text-center mb-8">
              Any questions or remarks? Just write us a message!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full border border-gray-300  px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={numb}
                  onChange={(e) => setNumb(e.target.value)}
                  className="mt-2 w-full border border-gray-300   px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2  w-full border px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Address<span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className="mt-2 w-full border px-3 py-2 rounded-xl focus:outline-none focus:ring-blue-500"
                placeholder="Enter Address"
                />
                
              </div>

              {/* Message Full Width */}
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Any Query ?<span className="text-red-500">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-2 w-full border  border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Message"
                ></textarea>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>

        <div className="relative lg:mt-20 pt-16 pb-12 px-4 sm:px-6 lg:px-20 bg-blue-900 cursor-pointer">
          {/* Info columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-6">
            <div className="flex flex-col justify-center items-center">
              <IoMdMailUnread className="text-4xl text-white mb-3" />
              <h4 className="text-sm text-white font-bold  uppercase tracking-widest mb-2">
                Email Us
              </h4>
              <p className="text-white text-sm ">skillgapanalyzer@gmail.com</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdOutlineSmartphone className="text-4xl text-white mb-3 " />
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                Phone
              </h4>
              <p className="text-white text-sm">01-23881</p>
              <p className="text-white text-sm">+977 9800000000</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IoLocationSharp className="text-4xl text-white mb-3" />
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                Our Office Location
              </h4>
              <p className="text-white text-sm">Skill Gap Analyzer</p>
              <p className="text-white text-sm">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contactus;
