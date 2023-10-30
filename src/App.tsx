import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/hero/Home";
import Footer from "./components/footer/Footer";
import Catalog from "./pages/catalog/Catalog";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
import { useState } from "react";

type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
  description: string;
};

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route
          path="details/:id"
          element={<Details cart={cart} setCart={setCart} />}
        />
        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
