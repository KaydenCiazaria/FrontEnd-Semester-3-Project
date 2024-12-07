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
import Property from "./pages/Property";
import PropertySchedule from "./pages/PropertySchedule";
import PropertyEdit from "./pages/PropertyEdit";
import PropertyAdd from "./pages/PropertyAdd";
import "./App.css";
import "./assets/css/global.css";

// Custom header logic
function AppHeader() {
  const location = useLocation();

  // Dynamically show NewHeader or Header
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
      <AppHeader /> {/* Dynamically renders Header or NewHeader */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headerLoggedIn/" element={<Home />} />
        <Route path="/headerPlain/register" element={<Register />} />
        <Route path="/headerPlain/reservationDetails" element={<ReservationDetails />} />
        
        <Route path="/headerLoggedIn/notification" element={<Notification />} />
        <Route path="/VillaInformation" element={<VillaInformation />} />
        <Route path="headerLoggedIn/villaInformation" element={<VillaInformation />} />

        <Route path="headerLoggedIn/property" element={<Property />} />
        <Route path="headerLoggedIn/propertySchedule" element={<PropertySchedule />} />
        <Route path="headerLoggedIn/propertyEdit" element={<PropertyEdit />} />
        <Route path="headerLoggedIn/propertyAdd" element={<PropertyAdd />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
