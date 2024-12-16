import React, { useState } from "react";
import "./FormAddProperty.css";

const FormAddProperty = () => {
  const [formData, setFormData] = useState({
    villaName: "",
    villaDesc: "",
    address: "",
    price: "",
    occupancy: 0,
    tags: "",
    locationName: "",
    photo: ""
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");

    const fetchid_end = "http://localhost:8080/api/villa_owner/auth/getVillaOwnerId";
    const form_end = "http://localhost:8080/api/villa/create_villa";

    const formattedPrice = formatCurrency(formData.price);

    try {

      const getuseid = await fetch(fetchid_end, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });

      if (!getuseid.ok) {
        throw new Error(`Error fetching userid: ${getuseid.status}`);
      };

      const result = await getuseid.json();
      const userid = JSON.stringify(result.data).slice(2, -2);

      const sendform = await fetch(form_end, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept" : "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          villa_name: formData.villaName,
          villa_desc: formData.villaDesc,
          address: formData.address,
          price: formattedPrice,
          occupancy: formData.occupancy,
          availableDate: formData.availableDate,
          villaOwnerid: userid,
          locationName: formData.locationName,
          imagePath: formData.photo
        })
      })

      if (!sendform.ok) {
        throw new Error(`Error submitting form: ${sendform.status}`)
      }

      const resresult = await sendform.json();
      console.log("Form submitted successfully", resresult);

    }

    catch (error) {
      console.error("Error occurred submitting form: ", error);
    }
    
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
            Villa Description:
            <textarea style={{height:"100px",verticalAlign:"top"}}
              name="villaDesc"
              value={formData.villaDesc}
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
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              required
              placeholder="Enter a number from 1-10"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormAddProperty;
