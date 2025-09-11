import React from "react";

const SchemeCard = ({ name, points, link }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
        <ul className="text-sm text-gray-700 space-y-1 mb-4">
          {points.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-center px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600"
      >
        Learn More
      </a>
    </div>
  );
};

export default SchemeCard;
