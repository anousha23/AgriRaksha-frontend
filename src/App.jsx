import { useState, useEffect } from "react";
import Features from "./pages/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Upload from "./pages/Upload";
import Footer from "./pages/Footer";
import Herosection from "./pages/HeroSection";
import SmartNudge from "./pages/SmartNudge";
import Gov from "./pages/GovernmentSchemes";
import Knowledge from "./pages/KnowledgeHub";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/auth/profile", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {user ? (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Herosection />
          <Features />  
          <Footer />
          </>} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/smartnudge" element={<SmartNudge />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/schemes" element={<Gov />} />
      </Routes>
    </BrowserRouter>
      ) : (
        <LoginPage setUser={setUser} />
      )}
     
  
    </div>
  );
}

export default App;

