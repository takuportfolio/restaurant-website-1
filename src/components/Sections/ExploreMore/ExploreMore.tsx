import React from "react";
// Component
import ImageGallery from '../../Common/Image/ImageGallery';
// data
import { exploreMore } from '../../../assets/data/exploremore.d'
//  Style
import styles from "./ExploreMore.module.scss";

const ExploreMoreSection: React.FC = () => (
  <section className={styles.explore}>
    <header className={styles.explore__header}>
      <h2 className={styles.explore__title}>Explore more</h2>
    </header>
    {/* Image */}
    <div className={styles.explore__showcase}>
      <ImageGallery 
        images={exploreMore}
        className={styles.explore__imgContainer}
        altText="Explore more image"
      />
    </div>
  </section>
);

export default ExploreMoreSection;
