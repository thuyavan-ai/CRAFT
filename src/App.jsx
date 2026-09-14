import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Language from "./pages/Language";
import Home from "./pages/Home";
import PhotoProduct from "./pages/PhotoProduct";
import VoiceProduct from "./pages/VoiceProduct";
import ProductListing from "./pages/ProductListing";
import Marketplace from "./pages/Marketplace";
import CustomerProduct from "./pages/CustomerProduct";
import Dashboard from "./pages/Dashboard";
import Tools from "./pages/Tools";
import Network from "./pages/Network";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* LANGUAGE */}
        <Route path="/language" element={<Language />} />

        {/* MAIN WEBSITE */}
        <Route element={<Layout />}>

          <Route path="/home" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tools" element={<Tools />} />

          <Route path="/marketplace" element={<Marketplace />} />

          <Route path="/network" element={<Network />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/voice-product" element={<VoiceProduct />} />

          <Route path="/photo-product" element={<PhotoProduct />} />

          <Route path="/product-listing" element={<ProductListing />} />

          <Route path="/customer-product" element={<CustomerProduct />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}