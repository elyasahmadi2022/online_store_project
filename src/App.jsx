import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import Home from "./page/Home";
import "./App.css";
import "./index.css";
import ShoppingCart from "./cart/ShoppingCart";
import NotificationsPage from "./page/NotificationsPage";
import { CartProvider } from "./context/CartContext";
import Product from "./page/Product.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
