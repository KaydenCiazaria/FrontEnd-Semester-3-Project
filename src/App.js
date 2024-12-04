// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import VillaInformation from './pages/VillaInformation';
import Form from './pages/Form';
import './App.css';



function App() {
  return (
    <Router>
    <div className="App">
      
    <Header />
      
        <Routes>
         
          <Route path="/" element={ <div className="home"><Home /></div>} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/VillaInformation" element={<VillaInformation />} /> 
          <Route path="/form" element={<Form />} /> 
        </Routes>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
