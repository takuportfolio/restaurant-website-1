import React from 'react';

// Components
import Image from '../../../components/Common/Image';
import styles from './EventBanner.module.scss';

// Image
import BannerImage from '../../../assets/images/events/bannerImage.png';

const EventBanner: React.FC = () => (
  <section className={styles.eventBanner}>
    <article className={styles.eventBanner__container}>
      <Image 
        className={styles.eventBanner__img}
        src={BannerImage}
        alt="Banner Image"
      />
      <div className={styles.eventBanner__content}>
        <h2 className={styles.eventBanner__heading}>Holiday celebrations</h2>
        <p className={styles.eventBanner__description}>Stay up-to-date on all the exciting events at LaidBack! From special tasting menus and holiday celebrations to live music and guest chef appearances, you'll find all the details here. Check back often as our calendar is always evolving.</p>
      </div>
    </article>
  </section>
);

export default EventBanner;