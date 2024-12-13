import React from 'react';
import VillaCard from '../components/VillaCard/VillaCard';

const villas = [
    {
      image: '.././villa-image.png',
      title: 'Beauvida Villa',
      price: 'Rp. 200.000/Night',
      rating: '4/5',
      address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan',
      tags: ['Swimming Pool', '3 bedrooms', '2 toilets', 'BBQ']
    },
    // Add more villa objects as needed
  ];

  const LoggedInHome = () => {
    return (
        <div className="villa-container">
        {villas.map((currentVilla, index) => (
          <VillaCard key={index} villa={currentVilla} />
        ))}
      </div>
    );
  };
  
  export default LoggedInHome;