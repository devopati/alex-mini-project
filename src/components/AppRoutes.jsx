import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import Product from "./Product";

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
