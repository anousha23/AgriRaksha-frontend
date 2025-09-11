import React, { useState, useEffect } from "react";
import man from "../assets/features/man.png";

const LoginPage = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);

    window.location.href = "http://localhost:5000/auth/google";
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [setUser]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-green-100 to-green-200 px-4">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 text-green-900 text-center animate-fadeIn">
        Welcome to AgriRakshak
      </h1>

      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col items-center w-full max-w-sm sm:max-w-md transform hover:scale-105 transition-transform duration-300">
        <img
          src={man}
          alt="Man working in agriculture illustration"
          className="w-[50vh] sm:w-[40vh] mb-6 "
        />

        <p className="text-green-700 text-center mb-4">
          Sign in with Google to continue and protect your crops efficiently.
        </p>

        <button
          onClick={handleGoogleLogin}
          className={`w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          ) : (
            "Sign in with Google"
          )}
        </button>

        <small className="mt-4 text-gray-400 text-center">
          We never share your information. Secure and reliable.
        </small>
      </div>
    </div>
  );
};

export default LoginPage;
