import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

const MarketAnalysisPage = () => {
  const [user, setUser] = useState(null);
  const [commodities, setCommodities] = useState([]);
  const [selectedCommodity, setSelectedCommodity] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [forecastDays, setForecastDays] = useState(7);
  const [forecastHTML, setForecastHTML] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    axios.get("/auth/me")
      .then(res => setUser(res.data))
      .catch(() => navigate("/login"));
  }, [navigate]);

  useEffect(() => {
    if (!user) return;
    axios.get("/ml/commodities")
      .then(res => {
        const data = Array.isArray(res.data.commodities) ? res.data.commodities : [];
        setCommodities(data);
      })
      .catch(() => setCommodities([]));
  }, [user]);

  const handleForecast = () => {
    if (!selectedCommodity || !selectedMarket) {
      alert("Select both commodity and market.");
      return;
    }

    setLoading(true);
    setForecastHTML("");
    setForecastData(null);

    axios.get("/ml/forecast", {
      params: {
        commodity: selectedCommodity.trim(),
        market: selectedMarket.trim(),
        days: forecastDays
      }
    })
    .then(res => {
      if (typeof res.data === "string") {
        setForecastHTML(res.data);
      } else if (typeof res.data === "object") {
        setForecastData(res.data);
      }
    })
    .catch(err => {
      console.error("Error fetching forecast:", err);
      setForecastHTML("<p class='text-red-600 font-semibold'>❌ Error fetching forecast</p>");
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-blue-800 text-center drop-shadow-sm">
        📈 Farmer's Market Price Forecaster
      </h1>
      <button
        onClick={handleBackClick}
        className="fixed top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg z-50"
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

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Select Commodity:</label>
          <select
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={selectedCommodity}
            onChange={e => setSelectedCommodity(e.target.value)}
          >
            <option value="">-- Select Commodity --</option>
            {commodities.length > 0
              ? commodities.map(c => <option key={c} value={c}>{c}</option>)
              : <option disabled>No commodities available</option>}
          </select>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Market:</label>
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter market name"
            value={selectedMarket}
            onChange={e => setSelectedMarket(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Forecast Period: <span className="text-blue-700 font-bold">{forecastDays}</span> days
          </label>
          <input
            type="range"
            min={7}
            max={90}
            value={forecastDays}
            onChange={e => setForecastDays(parseInt(e.target.value, 10))}
            className="w-full accent-blue-600"
          />
        </div>

        <button
          onClick={handleForecast}
          className={`w-full py-3 text-lg font-semibold rounded-lg transition shadow-md ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          disabled={loading}
        >
          {loading ? "🔄 Predicting..." : "🚀 Forecast Prices"}
        </button>
      </div>

      {(forecastHTML || forecastData) && (
        <div className="mt-10 bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">📊 Forecast Results</h2>

          {forecastHTML && (
            <div className="prose max-w-full">{parse(forecastHTML)}</div>
          )}

          {forecastData && (
            <div className="overflow-x-auto mt-4">
              <pre className="text-sm bg-gray-100 p-4 rounded-lg border border-gray-200">
                {JSON.stringify(forecastData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MarketAnalysisPage;
