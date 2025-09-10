import React from "react";
import man from "../assets/features/man.png";

const LoginPage = ({ setUser }) => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-green-900 text-center">
        Welcome to AgriRakshak
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center w-full max-w-sm sm:max-w-md">
        <img
          src={man}
          alt="man illustration"
          className="w-[50vh] mb-6"
        />

        <button
          onClick={handleGoogleLogin}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
