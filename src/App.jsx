import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { MessageCircle } from "lucide-react";
import MarketAnalysisPage from "./pages/MarketAnalysis";
import Features from "./pages/Features";
import LoginPage from "./pages/LoginPage";
import Upload from "./pages/Upload";
import Footer from "./pages/Footer";
import Herosection from "./pages/HeroSection";
import SmartNudge from "./pages/SmartNudge";
import Gov from "./pages/GovernmentSchemes";
import Knowledge from "./pages/KnowledgeHub";
import Silo from "./pages/Silo";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import ChatbotWindow from "./components/ChatBot";

function App() {
  const [user, setUser] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/auth/profile", { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then((data) => setUser(data.user || null))
      .catch(() => setUser(null));
  }, []);

  if (!user) {
    return <LoginPage setUser={setUser} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <Herosection />
                </Element>

                <Element name="features">
                  <Features />
                </Element>

                <Element name="footer">
                  <Footer />
                </Element>
              </>
            }
          />
          <Route path="/upload" element={<Upload />} />
          <Route path="/smartnudge" element={<SmartNudge />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/schemes" element={<Gov />} />
          <Route path="/silo" element={<Silo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features" element={<Features />} />
           <Route path="/market-analysis" element={<MarketAnalysisPage />} />
        </Routes>

  
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-50"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}

        {chatOpen && (
          <ChatbotWindow isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
