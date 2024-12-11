import React from 'react';
import VillaCard from '../VillaCard/VillaCard'; // Ensure the path to VillaCard is correct
import './VillaCardGrid.css'; // Import the CSS file for styling

const VillaCardGrid = () => {
  // Hardcoded villas data for testing
  const villas = [
    {
      image: 'https://via.placeholder.com/250',
      title: 'Villa 1',
      price: 'Rp. 200.000/Night',
      rating: 4,
      address: 'Jakarta',
      tags: ['Pool', 'BBQ'],
    },
    {
      image: 'https://via.placeholder.com/250',
      title: 'Villa 2',
      price: 'Rp. 300.000/Night',
      rating: 5,
      address: 'Bali',
      tags: ['Sea View', 'Hot Tub'],
    },
    {
      image: 'https://via.placeholder.com/250',
      title: 'Villa 3',
      price: 'Rp. 250.000/Night',
      rating: 3,
      address: 'Surabaya',
      tags: ['Garden', 'BBQ'],
    },
    {
      image: 'https://via.placeholder.com/250',
      title: 'Villa 4',
      price: 'Rp. 500.000/Night',
      rating: 5,
      address: 'Yogyakarta',
      tags: ['Ocean View', 'Jacuzzi'],
    },
    {
      image: 'https://via.placeholder.com/250',
      title: 'Villa 5',
      price: 'Rp. 400.000/Night',
      rating: 4,
      address: 'Bandung',
      tags: ['Mountain View', 'Pool'],
    },
    {
      image: 'https://via.placeholder.com/250',
      title: 'Villa 6',
      price: 'Rp. 350.000/Night',
      rating: 4,
      address: 'Jakarta',
      tags: ['BBQ', 'Gym'],
    },
  ];

  return (
    <div className="villa-card-grid">
      {villas.map((villa, index) => (
        <VillaCard key={index} villa={villa} />
      ))}
    </div>
  );
};

export default VillaCardGrid;
