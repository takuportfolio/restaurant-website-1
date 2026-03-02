import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from '../../Common/Image/Image'; // Adjust path if needed
import type { ReviewData } from '../../../types/menuType';
import styles from './Menu.module.scss';

interface ReviewSectionProps {
  review: ReviewData;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ review }) => (
  <div className={styles.review} id={review.id}>
    <div className={styles.rating}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          color={i < review.rating ? 'gold' : 'lightgray'} // Style stars based on rating
        />
      ))}
    </div>
    <blockquote className={styles.review__blockquote}>
      <p className={styles.review__quote}>{review.quote}</p>
      <div className={styles.review__reviewer}>
        {/* Avatar */}
        <div className={styles.review__reviewerContainer}>
          <Image
            className={styles.review__avatar}
            src={review.reviewerAvatarSrc}
            alt={review.reviewerAvatarAlt}
          />
          <div className={styles.review__reviewerInfo}>
            <p>{review.reviewerName}</p>
            <span>{review.reviewerTitle}</span>
          </div>
        </div>
        <div className="lineVertical"></div>
        {/* Brand logo */}
        <div className={styles.review__brandContainer}>
          <Image
            className={styles.review__brand}
            src={review.brandLogoSrc}
            alt={review.brandLogoAlt}
          />
        </div>
      </div>
    </blockquote>
  </div>
);

export default ReviewSection;