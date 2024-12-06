import React, { useState } from "react";
import './Form.css';
import './FormRegister.css';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    role: "renter",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleRole = () => {
    setFormData((prevData) => ({
      ...prevData,
      role: prevData.role === "renter" ? "owner" : "renter",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted:", formData);
    // Here, you can send formData to a server using an API
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <div className="switch-container">
        <label>
          <input
            type="checkbox"
            checked={formData.role === "owner"}
            onChange={toggleRole}
          />
          <span className="switch-label">
            {formData.role === "renter" ? "Renter" : "Owner"}
          </span>
        </label>
      </div>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default FormRegister;
