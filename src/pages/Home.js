import React from 'react';
import VillaCard from '../components/VillaCard/VillaCard';
import './Home.css'; // Ensure this file contains styling for the grid

const villas = [
  {
    image: '.././villa-image.png',
    title: 'Beauvida Villa',
    price: 'Rp. 200.000/Night',
    rating: '4/5',
    address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan',
    tags: ['Swimming Pool', '3 bedrooms', '2 toilets', 'BBQ']
  },
  {
    image: '.././villa-image.png',
    title: 'Seaside Retreat',
    price: 'Rp. 300.000/Night',
    rating: '5/5',
    address: 'Jl. Pantai Indah, Bali',
    tags: ['Sea View', '2 bedrooms', '1 toilet', 'Private Pool']
  },
  {
    image: '.././villa-image.png',
    title: 'Mountain Escape',
    price: 'Rp. 250.000/Night',
    rating: '4.5/5',
    address: 'Jl. Puncak Sari, Bandung',
    tags: ['Mountain View', '4 bedrooms', '3 toilets', 'Fireplace']
  },
  {
    image: '.././villa-image.png',
    title: 'Urban Oasis',
    price: 'Rp. 400.000/Night',
    rating: '4.8/5',
    address: 'Jl. Merdeka Raya, Surabaya',
    tags: ['City View', '3 bedrooms', '2 toilets', 'Gym Access']
  },
  {
    image: '.././villa-image.png',
    title: 'Very nice',
    price: 'Rp. 450.000/Night',
    rating: '3.6/5',
    address: 'Jl. Yup, Surabaya',
    tags: ['City View', '3 bedrooms', '2 toilets', 'Gym Access']
  },
];

const Home = () => {
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
