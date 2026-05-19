import { Link } from "react-router-dom";

function LoginSignupButton() {
  return (
    <div className="flex items-center gap-3">
      <Link
        to="/login"
        className="px-4 py-2 border border-[#0d47a1] text-[#0d47a1] rounded-lg hover:bg-blue-50 transition"
      >
        Login
      </Link>

      <Link
        to="/signup"
        className="px-4 py-2 bg-[#0d47a1] text-white rounded-lg hover:bg-blue-800 transition"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default LoginSignupButton;