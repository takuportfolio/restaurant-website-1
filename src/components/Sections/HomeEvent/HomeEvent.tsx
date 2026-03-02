import React from 'react';
// component
import Button from '../../../components/Common/Button';
// Styles
import styles from './HomeEvent.module.scss';

const HomeEvent: React.FC = () => (
  <section className={styles.event}>
    <div className="overlay--dark"></div>
    <div className={styles.event__content}>
      <div className={styles.event__description}>
        <h2 className={styles.event__title}>Catering & Events<br />Authentic Italian Feasts</h2>
        <p className={styles.event__text}>Create a sophisticated and memorable event with our authentic Italian catering. We offer customized menus featuring handcrafted pasta, flavorful sauces, and exquisite desserts, ensuring a dining experience.</p>
      </div>
      <div className="btnContainer">
        <Button variant='primary' cta="Let's Plan" />
      </div>
    </div>
  </section>
);

export default HomeEvent;