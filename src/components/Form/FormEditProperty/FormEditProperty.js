import React, { useState,useEffect } from "react";
import PopDelete from "../../PopUps/PopDelete/PopDelete"; // Import the modal for deletion
import "./FormEditProperty.css"; // Ensure you're using the proper CSS for styling
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
const FormEditProperty = () => {
  const [formData, setFormData] = useState({
      villa_name: "",
      villa_desc: "",
      address: "",
      price: "",
      occupancy: 0,
      tags: "",
      locationName: "",
      imagePath: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
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
  const handleLocChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      locationName: value
    })
  
  )
  };

  const formatCurrency = (value) => {
    if (!value) return '';

    const numericValue = value.replace(/[^0-9]/g, '');

    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(numericValue);
  };
  
  const handlePrice = (e) => {
    const input = e.target.value;
    const value = input.replace(/[^0-9]/g, '');

    setFormData((prevData) => ({
      ...prevData,
      price: value
    }))
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    try {
      // Step 1: Get villa owner ID
      formatCurrency(formData.price);
      const ownerResponse = await axios.post(
        "/api/villa_owner/auth/getVillaOwnerId",
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const villaOwnerId = ownerResponse.data.data[0]?.toString();

      if (!villaOwnerId) {
        setError("Failed to fetch villa owner ID.");
        return;
      }

      // Step 2: Update the villa
      const updateResponse = await axios.put(
        `/api/villa/update_villa/${id}`,
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Villa updated successfully:", updateResponse.data);

      // Redirect after successful update
      navigate("/headerLoggedIn/property");
    } catch (err) {
      console.error("Error updating villa:", err);
      setError("Failed to update villa. Please try again.");
    }
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
  const handleDeleteConfirm = async() => {
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    try {
      // Step 1: Get villa owner ID
      const ownerResponse = await axios.post(
        "/api/villa_owner/auth/getVillaOwnerId",
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const villaOwnerId = ownerResponse.data.data[0]?.toString();

      if (!villaOwnerId) {
        setError("Failed to fetch villa owner ID.");
        return;
      }

      // Step 2: Update the villa
      const deleteResponse = await axios.delete(
        `/api/villa/delete_villa/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Villa deleted successfully:", deleteResponse.data);

      // Redirect after successful update
      navigate("/headerLoggedIn/property");
    } catch (err) {
      console.error("Error deleting villa:", err);
      setError("Failed to delete villa. Please try again.");
    }
    // Your delete action logic here (e.g., API call to delete the villa)
    console.log("Villa deleted!");
    window.location.href = "http://localhost:3000/headerLoggedIn/property"; // Redirect to property page after delete
  };

  return (
    <div>
      <h1>Edit Villa</h1>
      <form onSubmit={handleSubmit} className="reservation">
        <div>
          <label>
            Villa Name:
            <input
              type="text"
              name="villa_name"
              value={formData.villa_name}
              onChange={handleChange}
              placeholder="Enter the villa name"
              required
            />
          </label>
          <label>
            Villa Description:
            <textarea style={{height:"100px",verticalAlign:"top"}}
              name="villa_desc"
              value={formData.villa_desc}
              onChange={handleChange}
              placeholder="Enter the villa description"
              required
            ></textarea>
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
          <label>
            Price (per night):
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handlePrice}
              placeholder="Enter the price per night"
              required
            />
          </label>
          <label>
            Occupancy:
            <input
              type="number"
              name="occupancy"
              value={formData.occupancy}
              onChange={handleChange}
              placeholder="Enter maximum occupancy"
              required
            />
          </label>
          <label>Location<br />
            <select name="location" value={formData.locationName} onChange={handleLocChange} required>
              <option value="Jakarta">Jakarta</option>
              <option value="Bogor">Bogor</option>
              <option value="Depok">Depok</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Bekasi">Bekasi</option>
            </select>
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
              type="text"
              name="imagePath"
              value={formData.imagePath}
              onChange={handleChange}
              required
              placeholder="Enter a number from 1-10"
            />
          </label>
          </div>
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