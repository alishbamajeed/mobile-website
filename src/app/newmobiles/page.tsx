"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import '@/styling/Newmobiles.css';

const mobiles = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    description: 'Latest flagship with A17 Pro chip, titanium design, and 48MP camera...',
    image: '/images/mob3.jpg',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with S-Pen, AI features and 200MP camera...',
    image: '/images/mob6.jpeg',
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    description: 'Advanced AI capabilities with Tensor G3, superior photography features...',
    image: '/images/mob11.jpeg',
  },
];

export default function NewestMobiles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mobiles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="newmobiles">
      <div className="honey">
        <p>Checkout the Latest Smartphones</p>
        <h2>Newest Mobiles</h2>
        <div className="underline"></div>
      </div>
      <div className="sliderContainer">
        <div className="mobileContainer">
          <div className="mobileImage">
            <Image
              src={mobiles[currentIndex].image}
              alt={mobiles[currentIndex].name}
              width={400}
              height={250}
            />
          </div>
          <div className="mobileDetails">
            <h3>{mobiles[currentIndex].name}</h3>
            <p>{mobiles[currentIndex].description}</p>
            <button className="detailsButton">View Specifications</button>
          </div>
        </div>
        <div className="dots">
          {mobiles.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
