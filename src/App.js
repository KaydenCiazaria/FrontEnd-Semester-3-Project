// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NewHeader from "./components/Header/NewHeader";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import VillaInformation from "./pages/VillaInformation";
import "./App.css";
import "./assets/css/global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/newHeader" element={<NewHeader />} />
        </Routes>

        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <Home />
              </div>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/VillaInformation" element={<VillaInformation />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;