import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Form.css';
import './FormReservation.css';
import { useNavigate } from "react-router-dom";

const FormReservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    message: "",
  });

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");

    const fetchid_end = "http://localhost:8080/api/users/auth/getusersId";
    const form_end = "http://localhost:8080/api/reservation/create_reservation";

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
          reservation_status: true,
          villaId: id,
          userId: userid,
          message: formData.message,
        })
      })

      if (!sendform.ok) {
        throw new Error(`Error submitting form: ${sendform.status}`)
      }

      const resresult = await sendform.json();
      console.log("Form submitted successfully", resresult);
      navigate("/headerLoggedIn");

    }

    catch (error) {
      console.error("Error occurred submitting form: ", error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}
    className="reservation">
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormReservation;