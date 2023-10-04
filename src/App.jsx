import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

//Pages
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = () => {
    const value = document.cookie;
    const cookiesData = value.split(";");

    const isSessionCookiePresent = cookiesData.some((cookie) => {
      const [cookieName] = cookie.trim().split("=");
      return cookieName === "session";
    });

    setIsAuth(isSessionCookiePresent);
  };

  useEffect(() => {
    checkAuth();
  });

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
