import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderPlain from "./components/Header/HeaderPlain";
import HeaderLoggedIn from "./components/Header/HeaderLoggedIn";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import VillaInformation from "./pages/VillaInformation";
import Notification from "./pages/Notification";
import ReservationDetails from "./pages/ReservationDetails";
import "./App.css";
import "./assets/css/global.css";

// Custom logic to determine which header to render
function AppHeader() {
  const location = useLocation();

  if (location.pathname.startsWith("/headerPlain")) {
    return <HeaderPlain />;
  } else if (location.pathname.startsWith("/headerLoggedIn")) {
    return <HeaderLoggedIn />;
  } else {
    return <Header />;
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader /> {/* Dynamically renders the appropriate header */}
        
        <main className="homepage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headerPlain/register" element={<Register />} />
            <Route path="/headerPlain/reservationDetails" element={<ReservationDetails />} />
            <Route path="/headerLoggedIn/notification" element={<Notification />} />
            <Route path="/VillaInformation" element={<VillaInformation />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
