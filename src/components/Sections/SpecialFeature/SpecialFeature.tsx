import React from 'react'

// style
import styles from './SpecialFeature.module.scss';

const SpecialFeature: React.FC = () => (
  <section className={styles.specialFeature}>
    <div className="overlay--light"></div>
    <div className={styles.specialFeature__content}>
      <div className={styles.specialFeature__description}>
        <p className={styles.specialFeature__kicker}>Special features</p>
        <h2 className={styles.specialFeature__title}>Enjoy an exceptional<br />Journey of taste</h2>
        {/* Separator */}
        <div className="separator--sm"></div>
        <p className={styles.specialFeature__text}>Your exceptional journey of taste awaits at LaidBack. Discover a menu designed to excite your palate and leave a lasting impression. Don't miss the opportunity to experience culinary excellence. Book your table now and prepare for an unforgettable dining adventure!</p>
      </div>
    </div>
  </section>
);

export default SpecialFeature;