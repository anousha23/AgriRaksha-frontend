import React from "react";
import background from "../assets/features/background.webp";
import profile from "../assets/features/profile.webp";

const Profile = ({ user }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#D1A980] bg-center"
      style={{ backgroundImage: url(${background}) }}
    >
      <div className="flex w-3/4 bg-opacity-80 rounded-2xl p-6">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={profile}
            alt="Profile"
            className="w-40 md:w-[25vw] rounded-full border-4 border-[#D1A980] shadow-lg"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-4">
          <div className="flex flex-col">
            <span className="text-white text-lg font-medium mb-1">Name</span>
            <div className="bg-[#8B4D47] text-white px-4 py-4 rounded-lg">
              {user?.name || "Loading..."}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-white text-lg font-medium mb-1">Phone no.</span>
            <div className="bg-[#8B4D47] text-white px-4 py-4 rounded-lg">
              {user?.phone || "Loading..."}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-white text-lg font-medium mb-1">Language?/mail</span>
            <div className="bg-[#8B4D47] text-white px-4 py-4 rounded-lg">
              {user?.language || user?.email || "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;