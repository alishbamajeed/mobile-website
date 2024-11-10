import React from 'react';
import styles from './offers.module.css';

const Offers = () => {
  return (
    <div className={styles.offersSection}>
      <h2 className={styles.offersTitle}>Exclusive Mobile Offers</h2>

      <div className={styles.offerCategory}>
        <h3 className={styles.categoryTitle}>Featured Offers</h3>
        <div className={styles.offerCards}>
          <div className={styles.offerCard}>
            <h4 className={styles.cardTitle}>iPhone 14 Pro</h4>
            <p className={styles.cardDescription}>Save $200 on selected models</p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
          <div className={styles.offerCard}>
            <h4 className={styles.cardTitle}>Samsung Galaxy S23 Ultra</h4>
            <p className={styles.cardDescription}>Up to 25% off</p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
        </div>
      </div>

      <div className={styles.offerCategory}>
        <h3 className={styles.categoryTitle}>Best Sellers</h3>
        <div className={styles.offerCards}>
          <div className={styles.offerCard}>
            <h4 className={styles.cardTitle}>OnePlus 11</h4>
            <p className={styles.cardDescription}>Starting at $699</p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
          <div className={styles.offerCard}>
            <h4 className={styles.cardTitle}>Google Pixel 7</h4>
            <p className={styles.cardDescription}>Special offer: 15% off</p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
        </div>
      </div>

      <div className={styles.offerCategory}>
        <h3 className={styles.categoryTitle}>Limited Time Deals</h3>
        <div className={styles.offerCards}>
          <div className={styles.offerCard}>
            <h4 className={styles.cardTitle}>Xiaomi 13 Pro</h4>
            <p className={styles.cardDescription}>Discounted for a limited time</p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
          <div className={styles.offerCard}>
            <h4 className={styles.cardTitle}>Sony Xperia 5</h4>
            <p className={styles.cardDescription}>Only while stocks last</p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
