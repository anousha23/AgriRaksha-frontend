import React, { useState } from "react";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Technology",
  "Crop Pattern",
  "Social",
  "Water/Irrigation"
];

const KnowledgeHub = () => {
     const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
   const handleBackClick = () => {
    navigate("/");
  };

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      filter === "All" || video.categories.includes(filter);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
            <button
        onClick={handleBackClick}
        className="fixed top-6 left-4 bg-[#C1CFA1] hover:bg-[#a9b68d] text-white px-4 py-2 rounded-lg shadow-lg z-50"
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
      <div className="bg-[#C1CFA1] p-6 rounded-xl mb-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Knowledge Hub</h2>
        <p className="text-gray-700">
          Explore more about your farm and best options to increase growth
        </p>
      </div>


      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="relative flex-grow sm:flex-none w-full sm:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full transition ${
                filter === cat
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-40">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, idx) => (
            <VideoCard key={idx} {...video} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No videos found.
          </p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeHub;