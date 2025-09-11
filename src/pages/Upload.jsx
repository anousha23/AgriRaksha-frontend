import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sman from "../assets/features/sman.webp";
import upload from "../assets/features/upload.webp";
import camera from "../assets/features/camera.webp";
import axios from "axios";

export default function UploadSection() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/ml/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#FFF6ED] to-[#FDEDDC] min-h-screen p-6 md:p-12 gap-10 md:gap-16 overflow-hidden relative">
      <button
        onClick={handleBackClick}
        className="fixed top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl shadow-lg z-50 flex items-center space-x-1"
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
        <span className="hidden sm:inline">Back</span>
      </button>

      <div className="flex flex-col items-center md:items-start w-full max-w-[280px]">
        <img
          src={sman}
          alt="Farmer with crops"
          className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[200px] lg:max-w-[260px] h-auto drop-shadow-lg"
        />
        <p className="mt-4 text-sm sm:text-base text-center md:hidden text-gray-800 font-medium leading-snug px-2">
          Detect the disease by simply uploading a picture
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm md:max-w-md">
        <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 w-full md:h-[36vh] flex flex-col items-center justify-center border border-gray-100">
          <img
            src={upload}
            alt="Upload"
            className="hidden md:block w-16 sm:w-20 lg:w-[11vw] h-auto mb-4 drop-shadow-md"
          />
          <img
            src={camera}
            alt="Camera"
            className="block md:hidden w-12 sm:w-16 h-auto mb-4 drop-shadow-md"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="bg-gradient-to-r from-[#1A3172] to-[#1A3151] hover:from-[#0f234e] hover:to-[#162f4f] text-white font-semibold py-2 px-5 rounded-xl shadow-md text-sm sm:text-base cursor-pointer transition-transform transform hover:scale-105"
          >
            {file ? "Change Image" : "Upload Image"}
          </label>

          <button
            onClick={handleUpload}
            className="mt-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-6 rounded-xl shadow-md text-sm sm:text-base transition-transform transform hover:scale-105"
            disabled={!file || loading}
          >
            {loading ? "Detecting..." : "Detect Disease"}
          </button>

          <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center leading-snug px-2">
            Or drop a file, paste image or url
          </p>
        </div>

        {result && (
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl w-full text-center space-y-4 border border-gray-100">
            {result.error ? (
              <p className="text-red-600 font-medium text-base sm:text-lg">{result.error}</p>
            ) : (
              <>
                <p className="text-gray-900 font-semibold text-lg sm:text-xl">
                  Disease: <span className="text-green-700">{result.disease}</span>
                </p>
                {result.info && (
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {result.info}
                  </p>
                )}
                {result.more_info_url && (
                  <a
                    href={result.more_info_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm sm:text-base shadow transition-transform transform hover:scale-105"
                  >
                    Learn more
                  </a>
                )}
              </>
            )}
          </div>
        )}

        <p className="mt-8 text-gray-800 font-medium hidden md:block text-lg lg:text-xl leading-snug text-center">
          Detect the disease by simply uploading a picture
        </p>
      </div>
    </div>
  );
}
