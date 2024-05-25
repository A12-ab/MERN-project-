import React from 'react';
import './Offers.css';
import exclusive_image from '../Assests/exclusive_image.png';

export const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>EXCLUSVE</h1>
            <h1>offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />

        </div>
    </div>
  )
}
