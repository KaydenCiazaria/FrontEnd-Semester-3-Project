// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><strong>Contact Us:</strong></p>
          <p>Phone Number: +62 22 9485 1027</p>
          <p>Email: villabooking@gmail.com</p>
        </div>
        <div className="location-info">
          <p><strong>Location:</strong></p>
          <p>
            The Prominence Office Tower, Jl. Jalur Sutera Bar. No.15, RT.003/RW.006,
            Panunggangan Tim., Kec. Pinang, Kota Tangerang, Banten 15143
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} VillaBooking. All rights reserved. Unauthorized use or reproduction of content is strictly prohibited.</p>
      </div>
    </footer>
  );
};

export default Footer;