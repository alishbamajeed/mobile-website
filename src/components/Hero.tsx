'use client'; // Add this line to mark the component as a client component

import React, { useEffect, useState } from 'react';
import '../styling/Hero.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/images/mob1.jpeg', '/images/mob2.jpeg', '/images/mob3.jpg', '/images/mob4.png'];

  const scrollBackground = (direction: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + images.length) % images.length);
  };

  useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.style.backgroundImage = `linear-gradient(rgba(124, 50, 50, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex]})`;
    }

    const interval = setInterval(() => {
      scrollBackground(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <main id="hero">
        <div className="heroText">
          <h2>GET YOUR DESIRED MOBILE AT A REASONABLE PRICE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="contactBtn">Contact Us</button>
        </div>
        <button className="arrow left" onClick={() => scrollBackground(-1)}>❮</button>
        <button className="arrow right" onClick={() => scrollBackground(1)}>❯</button>
      </main>
    </div>
  );
};

export default Hero;
