import Upload from "./pages/Upload";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
  
      <Features />
      <LoginPage />
      <Footer />
      <Upload />
    </div>
  );
}

export default App;