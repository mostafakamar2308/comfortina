import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
function App() {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);
  return (
    <BrowserRouter>
      {products.length > 0 && (
        <AppContext.Provider value={{ user, setUser, products }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppContext.Provider>
      )}
    </BrowserRouter>
  );
}
export { AppContext };
export default App;
