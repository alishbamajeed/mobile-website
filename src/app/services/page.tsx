import React from 'react';
import Head from 'next/head';
import '@/styling/Services.css';

import { FaCar, FaTools, FaFileAlt, FaMobileAlt, FaWrench } from 'react-icons/fa';

export default function Services() {
  return (
    <>
      <Head>
        <title>Carvilla</title>
        <meta name="description" content="Get your desired car at a reasonable price" />
      </Head>

      {/* Services Section */}
      <section id="services">
        <h2 className="sectionTitle">Our Services</h2>
        <div className="servicesContainer">
          <div className="serviceCard">
            <FaMobileAlt className="serviceIcon" />
            <h3>iPhone Repair</h3>
            <p>Expert repair services for all iPhone models including screen replacement, battery and more.</p>
            <div className="underline"></div>
          </div>
          <div className="serviceCard">
            <FaTools className="serviceIcon" />
            <h3>Unlimited Repair Warranty</h3>
            <p>Get guaranteed repair coverage, ensuring top-quality service and customer satisfaction.</p>
            <div className="underline"></div>
          </div>
          <div className="serviceCard">
            <FaFileAlt className="serviceIcon" />
            <h3>Insurance Support</h3>
            <p>We offer full support for all insurance claims, making the process easy and efficient for you.</p>
            <div className="underline"></div>
          </div>
          <div className="serviceCard">
            <FaMobileAlt className="serviceIcon" />
            <h3>Mobile Phone Repair</h3>
            <p>Reliable repair services for all types of smartphones with original parts and quick service.</p>
            <div className="underline"></div>
          </div>
          <div className="serviceCard">
            <FaWrench className="serviceIcon" />
            <h3>Tablet Repair Services</h3>
            <p>Expert repair for tablets, ensuring optimal performance and extended device longevity.</p>
            <div className="underline"></div>
          </div>
        </div>
      </section>
    </>
  );
}
