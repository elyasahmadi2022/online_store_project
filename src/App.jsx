import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import "./index.css";
import Home from "./page/Home";
import ShoppingCart from "./cart/ShoppingCart";
import NotificationsPage from "./page/NotificationsPage";
import { CartProvider } from "./context/CartContext";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;