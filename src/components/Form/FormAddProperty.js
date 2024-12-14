import React, { useState } from "react";
import "./Form.css";

const FormAddProperty = () => {
  const [formData, setFormData] = useState({
    villaName: "",
    price: "",
    address: "",
    tags: "",
    photo: null, // Photo file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted:", formData);
    // You can process the data here, such as sending it to a server
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
              name="villaName"
              value={formData.villaName}
              onChange={handleChange}
              placeholder="Enter the villa name"
              required
            />
          </label>
          <label>
            Price (per night):
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter the price per night"
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter the villa address"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tags (comma-separated):
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g., beach, luxury, family"
            />
          </label>
        </div>
        <div>
          <label>
            Photo:
            <input
              type="file"
              name="photo"
              onChange={handlePhotoChange}
              accept="image/*"
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormAddProperty;
