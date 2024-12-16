import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Form.css';
import './FormReservation.css';

const FormReservation = () => {
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
    e.preventDefault(); // Prevents page reload
    const token = localStorage.getItem("jwtToken");

    console.log(`Token: ${token}`);

    const useridend = "http://localhost:8080/api/users/auth/getusersId";
    const formend = "http://localhost:8080/api/reservation/create_reservation";

    try {

      const getuseid = await fetch(useridend, {
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
      const userid = JSON.stringify(result.data).slice(1, -1);
      console.log(`User id: ${userid}`);

      const sendreserve = await fetch(formend, {
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

      if (!sendreserve.ok) {
        throw new Error(`Error submitting form: ${sendreserve.status}`)
      }

      const resresult = await sendreserve.json();
      console.log("Form submitted successfully", resresult);

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