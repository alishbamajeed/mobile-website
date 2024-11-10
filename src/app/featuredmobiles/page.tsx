import React from 'react';
import Image from 'next/image';  // Import the Image component from Next.js
import '@/styling/FeaturedMobiles.css';

const Featuredmobiles = () => {
  const items = [
    { name: 'iPhone 14 Pro Max', price: '$1,099', model: 2022, storage: '512GB', color: 'Deep Purple', image: '/images/mob5.jpeg' },
    { name: 'Samsung Galaxy S23 Ultra', price: '$1,199', model: 2023, storage: '256GB', color: 'Phantom Black', image: '/images/mob6.jpeg' },
    { name: 'Google Pixel 7 Pro', price: '$899', model: 2022, storage: '256GB', color: 'Hazel', image: '/images/mob7.jpeg' },
    { name: 'OnePlus 11', price: '$699', model: 2023, storage: '256GB', color: 'Eternal Green', image: '/images/mob8.jpeg' },
    { name: 'Xiaomi 13 Pro', price: '$999', model: 2023, storage: '256GB', color: 'Ceramic Black', image: '/images/mob9.jpeg' },
    { name: 'Vivo X90 Pro', price: '$899', model: 2023, storage: '256GB', color: 'Legendary Black', image: '/images/mob10.jpeg' },
    { name: 'OPPO Find X6 Pro', price: '$999', model: 2023, storage: '256GB', color: 'Desert Silver', image: '/images/mob11.jpeg' },
    { name: 'Nothing Phone 2', price: '$699', model: 2023, storage: '256GB', color: 'Dark Gray', image: '/images/mob12.jpeg' }
  ];

  return (
    <div id="featuredmobiles">
      <h2 className="heading">Featured Mobiles</h2>
      <div className="grid">
        {items.map((item, index) => (
          <div key={index} className="card">
            <Image
              src={item.image}
              alt={item.name}
              width={500}  // Specify the width of the image
              height={300}  // Specify the height of the image
              className="image"
            />
            <div className="details">
              <p>
                {`${item.storage} Storage | ${item.color}`}
              </p>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p className="description">Latest flagship smartphone featuring cutting-edge technology and premium design.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredmobiles;
