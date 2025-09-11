import { useEffect, useState } from "react";
import background from "../assets/features/background.webp";
import profile from "../assets/features/profile.webp";
import { useNavigate } from "react-router-dom";

const Profile = () => {
   const navigate = useNavigate();
  const [user, setUser] = useState(null);

     const handleBackClick = () => {
    navigate("/");
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/me", {
          credentials: "include", //cookie session purpose
        });

        if (!res.ok) {
          throw new Error("Not authenticated");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#D1A980] bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <button
        onClick={handleBackClick}
        className="fixed top-6 left-4 bg-[#8B4D47] hover:bg-[#973b33] text-white px-4 py-2 rounded-lg shadow-lg z-50"
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

      <div className="w-[90%] max-w-md bg-[#8B4D47]/90 rounded-2xl shadow-2xl p-6 flex flex-col items-center space-y-6">

        <img
          src={user?.avatar || profile}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-[#D1A980] shadow-lg object-cover"
        />


        <div className="w-full">
          <span className="block text-white text-sm font-medium mb-1">Name</span>
          <div className="bg-[#D1A980] text-[#2C2C2C] px-4 py-2 rounded-lg">
            {user?.name || "Loading..."}
          </div>
        </div>

        <div className="w-full">
          <span className="block text-white text-sm font-medium mb-1">Phone no.</span>
          <div className="bg-[#D1A980] text-[#2C2C2C] px-4 py-2 rounded-lg">
            {user?.phone || "Not Provided"}
          </div>
        </div>

        <div className="w-full">
          <span className="block text-white text-sm font-medium mb-1">Email</span>
          <div className="bg-[#D1A980] text-[#2C2C2C] px-4 py-2 rounded-lg">
            {user?.email || "Loading..."}
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "http://localhost:5000/auth/logout")}
          className="w-fit px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
