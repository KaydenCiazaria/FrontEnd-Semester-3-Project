// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App;
