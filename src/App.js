import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Test from "./Components/Test";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
      </Routes>
      <Footer />
      {/* <Test/> */}
    </React.Fragment>
  );
}

export default App;
