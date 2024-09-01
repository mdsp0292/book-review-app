import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductGrid from "./components/Product/ProductGrid";
import Main from "./components/main/Main";

export default function App() {
  return (
    <div className="App">
        <Header title="Book Review System" />
        <Main />
        <Footer />
    </div>
  );
}
