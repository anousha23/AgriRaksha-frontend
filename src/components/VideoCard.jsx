import React from "react";

const VideoCard = ({ title, description, videoId }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <iframe
        className="w-full h-48"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-600 hover:underline text-sm"
        >
          Watch on YouTube →
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
