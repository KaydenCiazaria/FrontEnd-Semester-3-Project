import React from "react";
import VillaDescription from "../components/VillaDescription/VillaDescription";
import Form from "../components/Form/Form";
import "./Home.css";

const villas = [ //Trying to fetch data from Home.js instead of this
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

const VillaInformation = () => { //Note: won't be needing villas.map as only 1 object of villa is send in VillaInformation.js
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
