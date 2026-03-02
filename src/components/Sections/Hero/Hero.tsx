import React from "react";
// Component
import Button from "../../Common/Button";
import styles from './Hero.module.scss';

// Hero section
const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className="overlay"></div>
    <div className={styles.hero__content}>
      <div className={styles.hero__textContainer}>
        <h1 className={styles.hero__heading}>Welcome to LaidBack Eats<br />Your Dining Escape</h1>
        <p className={styles.hero__text}>Indulge in a delightful culinary experience where comfort meets flavor.<br /> Join us for a meal that feels like home.</p>
      </div>
      <div className={`btnContainer ${styles.hero__btnContainer}`}>
        <Button variant='primary' cta='View Menu' />
        <Button variant='secondary' cta='Order Online' />
      </div>
    </div>
  </section>
);

export default HeroSection;