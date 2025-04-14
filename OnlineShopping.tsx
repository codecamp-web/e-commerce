

import { Route, Routes } from "react-router-dom";
import SignLogin from "./pages/SignLogin";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

export default function OnlineShopping() {
  return (
    <ShoppingCartProvider>
        <Routes>
        <Route path="/" element={<SignLogin />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </ShoppingCartProvider>
  )
}
