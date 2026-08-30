import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import productsData from "./data/products.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import FarmerDashboard from "./pages/FarmerDashboard";
import AddProduct from "./pages/AddProduct";
import Orders from "./pages/Orders";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("farmloop-products");
    const savedOrders = localStorage.getItem("farmloop-orders");
    setProducts(savedProducts ? JSON.parse(savedProducts) : productsData);
    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("farmloop-products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    localStorage.setItem("farmloop-orders", JSON.stringify(orders));
  }, [orders]);

  const addProduct = (product) => {
    setProducts((current) => [{ ...product, id: Date.now() }, ...current]);
  };

  const placeOrder = (order) => {
    setOrders((current) => [{ ...order, id: Date.now(), status: "Requested" }, ...current]);
  };

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/marketplace"
            element={<Marketplace products={products} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} onPlaceOrder={placeOrder} />}
          />
          <Route
            path="/farmer"
            element={<FarmerDashboard products={products} />}
          />
          <Route
            path="/farmer/add"
            element={<AddProduct onAddProduct={addProduct} />}
          />
          <Route path="/orders" element={<Orders orders={orders} />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;