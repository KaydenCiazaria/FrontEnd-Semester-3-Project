import React from "react";
import VillaDescription from "../components/VillaDescription/VillaDescription";
import Form from "../components/Form/Form";
import "./Home.css";

const villas = [
  {
    image: "../../villa-image.jpg",
    title: "Beauvida Villa",
    price: "Rp. 200.000/Night",
    rating: "4/5",
    address: "Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan",
    tags: ["Swimming Pool", "3 bedrooms", "2 toilets", "BBQ"],
  },
  // Add more villa objects as needed
];

const VillaInformation = () => {
  return (
    <div className="parent">
      {villas.map((currentVilla, index) => (
        <VillaDescription key={index} villa={currentVilla} />
      ))}

      <Form />
    </div>
  );
};

export default VillaInformation;
