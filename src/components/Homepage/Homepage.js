import React from 'react';
import VillaCard from '../VillaCard/VillaCard';
import './Homepage.css';

const villas = [
    {
      image: '/path/to/villa-image.jpg',
      title: 'Beauvida Villa',
      price: 'Rp. 200.000/Night',
      rating: '4/5',
      address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan',
      tags: ['Swimming Pool', '3 bedrooms', '2 toilets', 'BBQ']
    },
    // Add more villa objects as needed
  ];

  const Homepage = () => {
    return (
        <div className="villa-container">
        {villas.map((villa, index) => (
          <VillaCard key={index} villa={villa} />
        ))}
      </div>
    );
  };
  
  export default Homepage;