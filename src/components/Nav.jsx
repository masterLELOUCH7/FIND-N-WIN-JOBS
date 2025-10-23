import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-illustration-svg-download-png-6817791.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
            Job Portal
          </h1>
        </Link>

        <div className="flex gap-8 items-center font-medium">
          <Link to="/" className="hover:text-teal-600 transition">Home</Link>
          <Link to="/jobs" className="hover:text-teal-600 transition">Jobs</Link>
          <Link to="/about" className="hover:text-teal-600 transition">About</Link>
        </div>

      </div>
    </nav>
  );
}
