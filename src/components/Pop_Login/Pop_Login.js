import React, { useState } from "react";
import "./Pop_Login.css";
import { useNavigate } from "react-router-dom";

const Pop_Login = ({ closeModal }) => {
  const [userType, setUserType] = useState("renter"); // Default to renter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "renter") {
      navigate("headerLoggedIn/");
    } else {
      navigate("My_Property/");
    }
    closeModal(); // Close the modal after navigating
  };

  return (
    <div className="pop-login-overlay">
      <div className="pop-login-container">
        <div className="user-type-selection">
          <button
            className={`user-type-button ${
              userType === "renter" ? "active" : ""
            }`}
            onClick={() => handleUserTypeChange("renter")}
          >
            Renter
          </button>
          <button
            className={`user-type-button ${
              userType === "owner" ? "active" : ""
            }`}
            onClick={() => handleUserTypeChange("owner")}
          >
            Owner
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-submit-button">
            Submit
          </button>
        </form>
        <button className="close-button" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Pop_Login;
