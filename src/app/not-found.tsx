import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#0a0a0f]">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto animate__animated animate__fadeIn animate__delay-2s">
          Looks like you've taken a wrong turn. Don't worry, we'll get you back
          on track!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeIn animate__delay-3s">
          <Link
            href={"/"}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Back to Home
          </Link>
        </div>
      </div>
      <footer className="mt-12 text-center text-sm text-gray-400 animate__animated animate__fadeIn animate__delay-4s">
        If you believe this is an error, please contact our support team.
      </footer>
    </div>
  );
}

export default NotFound;
