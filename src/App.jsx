import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

//Pages
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";

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
  }, [isAuth]);

  return (
    <div>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route
          path="/products"
          element={isAuth ? <Products /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={!isAuth ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/register"
          element={!isAuth ? <Register /> : <Navigate to="/" />}
        ></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
