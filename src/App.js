import React from "react";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
