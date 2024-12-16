import React, { useState, useEffect } from 'react';
import VillaCard from '../../components/VillaCard/VillaCard';
import './Home.css'; // Ensure this file contains styling for the grid
import VillaExample from '../../assets/images/VillaExample.jpg';
import VillaExample2 from '../../assets/images/VillaExample2.jpg';
const Home = () => {

  const [villas, setVillas] = useState([]);

  useEffect(() => {

    const fetchVillas = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/villa/show_villa');
        const data = await response.json();

        const transformedVillas = data.map(villa => ({
          id: villa.id,
          image: villa.imagePath[0] === "1" ? VillaExample : VillaExample2,
          title: villa.villa_name,
          price: `${villa.price}/Night`,
          rating: `${villa.review_rating}/5`,
          address: villa.address,
          tags: ['Whatever']
        }));
        setVillas(transformedVillas);
      } catch (error) {
        console.error('Error fetching villa data: ', error);
      }
    };

    fetchVillas();
  }, [])

  return (
    <div className="home-container">
      <h1>Welcome to Villa Rentals</h1>
      <p>Explore our luxurious villa options and find the perfect place to stay.</p>

      <div className="villa-card-grid"> {/* Grid layout for the villa cards */}
        {villas.map((currentVilla, index) => (
          <VillaCard key={index} villa={currentVilla} />
        ))}
      </div>
    </div>
  );
};

export default Home;
