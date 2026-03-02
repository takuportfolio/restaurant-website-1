import React from 'react';
// Component
import ImageGallery from '../../../components/Common/Image/ImageGallery';
// data
import { eventImages } from '../../../assets/data/eventiamges.d';
// styles
import styles from './EventGallery.module.scss';

const EventGallery: React.FC = () => (
  <section className={styles.eventGallery}>
    <div className={styles.eventGallery__showcase}>
      <ImageGallery 
        images={eventImages}
        className={styles.eventGallery__img}
        altText="Banner Image"
      />
    </div>
  </section>
);

export default EventGallery;