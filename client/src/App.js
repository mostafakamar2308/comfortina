import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Register from "./components/Register";
import Favorites from "./components/favorites";
import Cart from "./components/Cart";

const UserContext = createContext();
const Overlay = createContext();

function App() {
  const [user, setUser] = useState();
  const [favoriteList, setFavoriteList] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (window.localStorage.getItem("userToken")) {
      let token = window.localStorage.getItem("userToken");
      axios
        .post("http://localhost:5000/api/v1/token", { token })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
          setUser({});
        });
      axios
        .post("http://localhost:5000/api/v1/products/getFavorites", {
          token: window.localStorage.getItem("userToken"),
        })
        .then((res) => {
          setFavoriteList(res.data.favorites);
        });
      axios
        .post("http://localhost:5000/api/v1/products/getCart", {
          token: window.localStorage.getItem("userToken"),
        })
        .then((res) => {
          setCart(res.data.cart);
        });
    }
  }, []);
  const [favoriteOverlay, setFavoriteOverlay] = useState(false);
  const [cartOverlay, setCartOverlay] = useState(false);
  return (
    <>
      {favoriteOverlay && (
        <Favorites
          favorites={favoriteList}
          handleOverLay={setFavoriteOverlay}
        />
      )}
      {cartOverlay && (
        <Cart handleOverLay={setCartOverlay} cart={cart} handleCart={setCart} />
      )}
      <BrowserRouter basename="/">
        <UserContext.Provider
          value={{
            user,
            setUser,
            favoriteList,
            setFavoriteList,
            cart,
            setCart,
          }}
        >
          <Overlay.Provider
            value={{
              setFavoriteOverlay,
              setCartOverlay,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Overlay.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
export { UserContext, Overlay };
export default App;
