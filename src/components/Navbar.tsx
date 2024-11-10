"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styling/Navbar.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.slice(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Mobile Hub</title>
        <meta name="description" content="Buy the latest smartphones at amazing prices" />
      </Head>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <h1 className="logo" onClick={toggleMenu}>MOBILE HUB</h1>
          <button
            onClick={toggleMenu}
            className="menu-button"
            type="button"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
          <ul className={`menu ${isOpen ? 'show' : ''}`}>
            <li><Link href="#hero" onClick={handleSmoothScroll}>Home</Link></li>
            <li><Link href="#newmobiles" onClick={handleSmoothScroll}>Latest Mobiles</Link></li>
            <li><Link href="#services" onClick={handleSmoothScroll}>Services</Link></li>
            <li><Link href="#featuredcars" onClick={handleSmoothScroll}>featuredmobiles</Link></li>
      
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
