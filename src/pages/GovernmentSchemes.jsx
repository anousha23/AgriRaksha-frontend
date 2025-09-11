import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import schemes from "../data/schemes";
import SchemeCard from "../components/SchemeCard";
import { useNavigate } from "react-router-dom";

const categoriesList = [
  "Income Support",
  "Water/Irrigation",
  "Insurance",
  "Credit",
  "Organic Farming",
  "Technology"
];

const GovernmentSchemes = () => {
   const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

   const handleBackClick = () => {
    navigate("/");
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch = scheme.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => scheme.categories?.includes(cat));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f8f6ec] p-6">
      <button
        onClick={handleBackClick}
        className="fixed top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
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
<div className="bg-blue-300 rounded-xl p-6 mb-6 max-w-4xl mx-auto text-center">
  <h1 className="text-2xl sm:text-3xl font-bold text-white">
    Government Schemes
  </h1>
  <p className="text-white text-sm sm:text-base">
    Find more about the government schemes you're eligible for and how to avail them
  </p>
</div>


      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <div className="relative flex-grow w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search schemes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition"
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
          <h2 className="text-gray-800 font-semibold mb-3">Filter by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {categoriesList.map((category) => (
              <label key={category} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="accent-blue-500"
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-40">
        {filteredSchemes.map((scheme, idx) => (
          <SchemeCard key={idx} {...scheme} />
        ))}
        {filteredSchemes.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No schemes found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default GovernmentSchemes;
