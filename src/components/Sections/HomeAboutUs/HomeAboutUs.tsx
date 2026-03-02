import React from 'react';
// component
import Image from '../../../components/Common/Image';
import Button from '../../../components/Common/Button';
// styles
import styles from './HomeAboutUs.module.scss';
// images
import aboutusImageLeft from '../../../assets/images/home/about-us-left.png';
import aboutusImageRight from '../../../assets/images/home/about-us-right.png';


// Homepage's Sections
// Home Page's AboputUsSecion
const HomeAboutUs: React.FC = () => (
  <section className={styles.aboutus}>
    <header className={styles.aboutus__header}>
      <h2 className={styles.aboutus__title}>About us</h2>
    </header>
    <div className={styles.aboutus__content}>
      <Image
        className={styles.aboutus__imgContainer}
        src={aboutusImageLeft}
        alt='explore Image'
      />
      <div className={styles.aboutus__card}>
        <div className={styles.aboutus__details}>
          <div className={styles.aboutus__description}>
            <p className={styles.aboutus__kicker}>Special features</p>
            <h3 className={styles.aboutus__heading}>Traditional<br />& Modern</h3>
            <p className={styles.aboutus__text}>They offer a mix of pasta, sandwiches, and salads, catering to different preferences.</p>
          </div>
          <div className="btnContainer">
            <Button variant='primary' cta='See more' />
          </div>
        </div>
      </div>
      <Image
        className={styles.aboutus__imgContainer}
        src={aboutusImageRight}
        alt='explore Image'
      />
    </div>
  </section>
);

export default HomeAboutUs;