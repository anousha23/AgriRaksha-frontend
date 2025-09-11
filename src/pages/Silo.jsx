import React, { useState } from "react";

const Silo = () => {
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

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
    <div className="min-h-screen bg-[#F4F1EA] text-[#2E2A1F] flex flex-col items-center py-10 px-4">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">🧊</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4B5320]">
            Cold Storage & Silo Finder
          </h1>
        </div>
        <p className="mt-2 text-[#5C5346] max-w-xl">
          Helping Indian farmers find the best storage for their produce.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-[#EDE6D4] shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-[#4B5320]">Find Storage Near You</h2>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Enter your Village/City and State
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. Nashik, Maharashtra"
            className="w-full px-4 py-2 border border-[#C2B280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Produce Quantity (in Tonnes)
          </label>
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-[#8B5E3C] text-white rounded-md hover:bg-[#704832] transition"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#C2B280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] text-center"
              min="0"
            />
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 bg-[#8B5E3C] text-white rounded-md hover:bg-[#704832] transition"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleFindStorage}
          disabled={loading}
          className="w-full py-2 bg-[#4B5320] text-white rounded-lg hover:bg-[#3A4220] transition font-semibold"
        >
          {loading ? "Finding..." : "Find Storage"}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-8 w-full max-w-3xl space-y-4">
          <h3 className="text-xl font-bold">Results</h3>
          {results.map((r, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">{r.name}</h4>
              <p>{r.city}, {r.state}</p>
              <p>Distance: {r.distance_km} km</p>
              <p>Cost: ₹{r.cost_per_tonne_per_day}/tonne/day</p>
              <p>Capacity: {r.available_capacity_tonnes} tonnes</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Silo;
