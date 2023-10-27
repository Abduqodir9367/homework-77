import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/hero/Home";
import Footer from "./components/footer/Footer";
import Catalog from "./pages/catalog/Catalog";
import Details from "./pages/details/Details";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
