// src/pages/LoginPage.jsx
import React, { useEffect, useState } from "react";
import man from "../assets/features/man.png";

const LoginPage = () => {
  const [user, setUser] = useState(null);

  // Fetch user profile if already logged in
  useEffect(() => {
    fetch("http://localhost:5000/auth/profile", {
      credentials: "include", // send cookies
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUser(data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4">
      {!user ? (
        <>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-green-900 text-center">
            Welcome to AgriRakshak
          </h1>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center w-full max-w-sm sm:max-w-md">
            <img
              src={man}
              alt="man illustration"
              className="w-32 sm:w-40 mb-6"
            />

            <button
              onClick={handleGoogleLogin}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Sign in with Google
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4 text-center">
            Hello, {user.name} 👋
          </h1>
          <img
            src={user.avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full mb-4"
          />
          <p className="text-green-800 text-center break-words">
            Email: {user.email}
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;