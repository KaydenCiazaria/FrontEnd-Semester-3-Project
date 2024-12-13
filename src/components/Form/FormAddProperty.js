import React, { useState } from "react";
import "./Form.css";

const FormReservation = () => {
  const [formData, setFormData] = useState({
    villaName: "",
    address: "",
    facilities: "",
    description: "",
  });

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
    // Here, you can send formData to a server using an API
  };

  return (
    <div>
      <h1>Add Villa</h1>
      <form onSubmit={handleSubmit} className="reservation">
        <div>
          <label>
            Villa Name:
            <input
              type="text"
              name="name"
              value={formData.villaName}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            facilities:
            <textarea
              name="facilities"
              value={formData.facilities}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormReservation;
