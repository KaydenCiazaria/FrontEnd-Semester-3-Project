import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PopLogin.css";

const PopLogin = ({ closeModal }) => {
  const [userType, setUserType] = useState("renter"); // Default to renter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint =
      userType === "renter"
        ? "http://localhost:8080/api/users/auth/login"
        : "http://localhost:8080/api/villa_owner/auth/login";

    try {
      const response = await axios.post(endpoint, { email, password });
      const { token } = response.data; // Assuming the JWT token is in the `token` field
      if (!token || token.trim() === "") {
        // If token is missing or empty, alert an error
        alert("Login failed: Token is missing from the response.");
        return;
      }
      // Store token in a cookie
      localStorage.setItem("jwtToken", token);

      // Navigate to the appropriate page
      if (userType === "renter") {
        navigate("/headerLoggedIn/");
      } else {
        navigate("/My_Property/");
      }

      closeModal(); // Close the modal
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="pop-login-overlay">
      <div className="pop-login-container">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Log In to unlock more features!</h2>
        <p>Who Are You?</p>
        <div className="user-type-selection">
          <button
            className={`user-type-button ${
              userType === "renter" ? "active" : ""
            }`}
            onClick={() => handleUserTypeChange("renter")}
          >
            Look for a villa
          </button>
          <button
            className={`user-type-button ${
              userType === "owner" ? "active" : ""
            }`}
            onClick={() => handleUserTypeChange("owner")}
          >
            Rent out my villa
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-submit-button">
            Enter
          </button>
        </form>
        <p className="register-text">
          Don't have an account?{" "}
          <span
            className="register-link"
            onClick={() => {
              closeModal();
              navigate("headerPlain/register");
            }}
          >
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default PopLogin;
