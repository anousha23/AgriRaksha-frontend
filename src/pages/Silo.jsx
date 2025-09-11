import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Silo = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handleBackClick = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(!isNaN(value) && value >= 0 ? value : 0);
  };

  const handleFindStorage = async () => {
    if (!address || quantity <= 0) {
      alert("Please enter address and quantity.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/ml/silos?address=${encodeURIComponent(address)}&quantity=${quantity}`,
        { credentials: "include" }
      );

      if (!res.ok) throw new Error("Failed to fetch results");
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Error fetching storage:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F6F1] to-[#ECE6D9] text-[#2E2A1F] flex flex-col items-center py-12 px-4">
      <button
        onClick={handleBackClick}
        className="fixed top-4 left-4 bg-[#5C5346] hover:bg-[#4e4435] text-white px-4 py-2 rounded-full shadow-lg z-50 flex items-center space-x-2"
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
        <span>Back</span>
      </button>

      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center space-x-3">
          <span className="text-5xl">🧊</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#3C4420]">
            Cold Storage & Silo Finder
          </h1>
        </div>
        <p className="mt-3 text-[#5C5346] max-w-2xl text-lg">
          Helping Indian farmers find safe and affordable storage for their produce.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-[#4B5320]">Find Storage Near You</h2>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#5C5346]">
            Enter your Village/City and State
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. Nashik, Maharashtra"
            className="w-full px-4 py-3 border border-[#C2B280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#5C5346]">
            Produce Quantity (in Tonnes)
          </label>
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#704832] transition font-bold"
            >
              −
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#C2B280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] text-center font-medium"
              min="0"
            />
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#704832] transition font-bold"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleFindStorage}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-lg transition ${
            loading
              ? "bg-[#A7A499] cursor-not-allowed text-white"
              : "bg-[#4B5320] hover:bg-[#3A4220] text-white shadow-md"
          }`}
        >
          {loading ? "🔍 Finding..." : "Find Storage"}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-12 w-full max-w-4xl space-y-6">
          <h3 className="text-2xl font-bold text-[#4B5320]">Available Storage Options</h3>
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h4 className="font-bold text-xl text-[#3C4420]">{r.name}</h4>
              <p className="text-[#5C5346]">{r.city}, {r.state}</p>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-[#2E2A1F]">
                <div className="bg-[#F4F1EA] p-3 rounded-lg">
                  <p className="font-medium">Distance</p>
                  <p>{r.distance_km} km</p>
                </div>
                <div className="bg-[#F4F1EA] p-3 rounded-lg">
                  <p className="font-medium">Cost</p>
                  <p>₹{r.cost_per_tonne_per_day}/tonne/day</p>
                </div>
                <div className="bg-[#F4F1EA] p-3 rounded-lg">
                  <p className="font-medium">Capacity</p>
                  <p>{r.available_capacity_tonnes} tonnes</p>
                </div>
                <div className="bg-[#F4F1EA] p-3 rounded-lg">
                  <p className="font-medium">Availability</p>
                  <p>{r.available_capacity_tonnes > 0 ? "✅ Available" : "❌ Full"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Silo;
