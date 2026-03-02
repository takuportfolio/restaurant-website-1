import React from 'react';
import Image from '../../../Common/Image/Image'; // Adjust path if needed
import ReviewSection from '../ReviewSection'; // Import the ReviewSection component
import type { MenuItemData, ReviewData } from '../../../../types/menuType';
import styles from '../Menu.module.scss';

interface FullMenuCardProps {
  item: MenuItemData;
  review: ReviewData; // This will be the general restaurant review
}

const FullMenuCard: React.FC<FullMenuCardProps> = ({ item, review }) => (
  <article className={`${styles.topMenu__card} ${styles.topMenu__cardFull}`}>
    <div className={styles.topMenu__content}>
        <Image
            className={styles.topMenu__imgContainer}
            src={item.menuSrc}
            alt={item.menuAlt}
        />
      <div className={`${styles.topMenu__details} ${styles.topMenu__detailsFull}`}>
        {/* Content Left */}
        <div className={styles.topMenu__detailLeft}>
          <h3 className={styles.topMenu__title}>{item.title}</h3>
          <div className={styles.topMenu__text}>
            <p className={styles.topMenu__body}>{item.description}</p>
            <span className={styles.topMenu__price}>{item.price}</span>
          </div>
        </div>
        {/* Content Right */}
        <div className={styles.topMenu__detailRight}>
          <ReviewSection review={review} /> {/* Pass the general review */}
        </div>
      </div>
    </div>
  </article>
);

export default FullMenuCard;

