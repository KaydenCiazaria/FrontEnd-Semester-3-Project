import React, { useState } from "react";
import PopDelete from "../../PopUps/PopDelete/PopDelete"; // Import the modal for deletion
import "./FormEditProperty.css"; // Ensure you're using the proper CSS for styling
import { useParams } from "react-router-dom";
const FormEditProperty = () => {
  const [formData, setFormData] = useState({
    villaName: "",
    price: "",
    address: "",
    tags: "",
    photo: "", // Photo file
  });
  const [showModal, setShowModal] = useState(false); // For showing modal
  const { id } = useParams();
  console.log("villa id is",id);
  const token = localStorage.getItem("jwtToken");
  console.log(`Token: ${token}`);
  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can process the data here, such as sending it to a server
  };

  // Open the modal for deletion
  const openModal = () => {
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Handle delete confirmation
  const handleDeleteConfirm = () => {
    // Your delete action logic here (e.g., API call to delete the villa)
    console.log("Villa deleted!");
    window.location.href = "http://localhost:3000/headerLoggedIn/property"; // Redirect to property page after delete
  };

  return (
    <div>
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
            Photo 
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="(pick 1-5)"
            />
          </label>
        </div>

        {/* Buttons Container */}
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="delete-button" onClick={openModal}>
            Delete
          </button>
        </div>
      </form>

      {/* Modal Component */}
      {showModal && (
        <PopDelete closeModal={closeModal} onDeleteConfirm={handleDeleteConfirm} />
      )}
    </div>
  );
};

export default FormEditProperty;
