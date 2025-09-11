import React from "react";

const VideoCard = ({ title, description, videoId }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-700 text-sm mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;