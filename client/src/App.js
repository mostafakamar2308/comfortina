import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import LoaderSpinner from "./components/LoaderSpinner";

const Home = lazy(() => import("./components/Home"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const Contact = lazy(() => import("./components/Contact"));
const Login = lazy(() => import("./components/Login"));

const Register = lazy(() => import("./components/Register"));
const Favorites = lazy(() => import("./components/favorites"));
const Cart = lazy(() => import("./components/Cart"));

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
        .post("https://comfortina-api.vercel.app/api/v1/token", { token })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
          setUser({});
        });
      axios
        .post(
          "https://comfortina-api.vercel.app/api/v1/products/getFavorites",
          {
            token: window.localStorage.getItem("userToken"),
          }
        )
        .then((res) => {
          setFavoriteList(res.data.favorites);
        });
      axios
        .post("https://comfortina-api.vercel.app/api/v1/products/getCart", {
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
    <div className="relative">
      <Suspense fallback={<LoaderSpinner />}>
        {favoriteOverlay && (
          <Favorites
            favorites={favoriteList}
            handleOverLay={setFavoriteOverlay}
          />
        )}
        {cartOverlay && (
          <Cart
            handleOverLay={setCartOverlay}
            cart={cart}
            handleCart={setCart}
          />
        )}
      </Suspense>
      <BrowserRouter basename="/">
        <Suspense fallback={<LoaderSpinner />}>
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export { UserContext, Overlay };
export default App;
