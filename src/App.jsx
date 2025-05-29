import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import CalCulator from "./components/CalCulator";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="calculator" element={<CalCulator />} />
          <Route path="user-detail" element={<UserDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
