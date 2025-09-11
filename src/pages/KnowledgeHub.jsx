import React, { useState } from "react";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

const KnowledgeHub = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Pest Control", "Crop Pattern", "Livestock", "Weather", "Social", "Soil", "Water", "Technology"];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || video.categories.includes(filter);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="bg-[#C1CFA1] p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-bold">Knowledge Hub</h2>
        <p className="text-gray-700">Explore more about your farm and best options to increase growth</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full sm:w-1/2 p-3 rounded-full border border-gray-300 shadow focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full ${
                filter === cat ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeHub;
