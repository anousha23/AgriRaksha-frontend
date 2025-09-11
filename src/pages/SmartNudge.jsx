import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SmartNudge = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    location: "",
    agree: false,
  });
  const handleBackClick = () => {
    navigate("/");
  };

  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.location) {
      setShowMap(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FBE9D5] flex flex-col md:flex-row items-center gap-10 justify-center p-4">
      <button
        onClick={handleBackClick}
        className="fixed top-4 left-4 bg-[#DF6750] hover:bg-[#c95740] text-white px-4 py-2 rounded-lg shadow-lg z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="w-full max-w-lg bg-[#F4947E] rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Smart Nudge
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF6750]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF6750]"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF6750]"
              placeholder="Enter your location"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="w-4 h-4 text-[#DF6750] border-gray-300 rounded focus:ring-[#DF6750]"
            />
            <span className="text-white text-sm">
              I agree to share my details
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-[#DF6750] text-white font-semibold hover:bg-[#c95740] transition"
          >
            Confirm
          </button>
        </form>
      </div>

      {showMap && (
        <div className="w-full max-w-4xl mt-6">
          <iframe
            title="Weather Map"
            className="w-full h-80 rounded-xl shadow-lg"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              formData.location
            )}&output=embed`}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default SmartNudge;
