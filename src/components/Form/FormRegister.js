import React, { useState } from "react";
import "./Form.css";
import "./FormRegister.css";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    role: "renter",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleRoleChange = (role) => {
    setFormData((prevData) => ({
      ...prevData,
      role,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted:", formData);
    // Here, you can send formData to the server using an API
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <h2>Register</h2>
      <div className="role-container">
        <div
          className={`role-box ${
            formData.role === "renter" ? "selected-role" : ""
          }`}
          onClick={() => handleRoleChange("renter")}
        >
          Renter
        </div>
        <div
          className={`role-box ${
            formData.role === "owner" ? "selected-role" : ""
          }`}
          onClick={() => handleRoleChange("owner")}
        >
          Owner
        </div>
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
      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default FormRegister;
