import { useState, useEffect } from "react";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import LoginPage from "./pages/LoginPage";

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
        <>
          <Features />
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> c34dd8f89f4b12b9a2f22c1b90adac5b8b359515
