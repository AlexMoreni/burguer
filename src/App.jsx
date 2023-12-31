import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

//Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

//Pages
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Payment from "./pages/Payment.jsx";
import Orders from "./pages/Orders.jsx";
import Panel from "./pages/Panel.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cartQty, setCartQty] = useState(false);

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

  useEffect(() => {
    if (isAuth) {
      axios
        .get("https://api-burguer.onrender.com/burguer/productscart", {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.message === "Produtos encontrados!") {
            const productsCart = response.data.productsCart;

            const filteredProducts = productsCart.filter((product) => {
              return product.finished !== 1;
            });

            if (filteredProducts.length > 0) {
              setCartQty(filteredProducts.length);
            }
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  });

  return (
    <div>
      <Navbar isAuth={isAuth} cartQty={cartQty} />
      <Routes>
        <Route
          path="/panel"
          element={isAuth ? <Panel /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/orders"
          element={isAuth ? <Orders /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/payment"
          element={isAuth ? <Payment /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/shoppingcart"
          element={
            isAuth ? (
              <ShoppingCart cartQty={cartQty} setCartQty={setCartQty} />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/products"
          element={
            isAuth ? (
              <Products cartQty={cartQty} setCartQty={setCartQty} />
            ) : (
              <Navigate to="/login" />
            )
          }
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
