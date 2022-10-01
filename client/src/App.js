import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Register from "./components/Register";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    if (window.localStorage.getItem("userToken")) {
      let token = window.localStorage.getItem("userToken");
      axios
        .post("http://localhost:5000/api/v1/token", { token })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
          setUser({});
        });
    }
  }, []);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export { UserContext };
export default App;
