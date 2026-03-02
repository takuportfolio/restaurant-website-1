import React from 'react';
// Component
import Image from '../../Common/Image';
import type StoryType from '../../../types/storyType';
// Style
import styles from './StorySection.module.scss';

const StorySection: React.FC<StoryType> = ({
  kicker,
  heading,
  text,
  imageSrc,
  altText,
  reverse,
}) => {
  return (
    <figure className={`${styles.story__content} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.story__description}>
        <p className={styles.story__kicker}>{kicker}</p>
        <h3 className={styles.story__heading}>{heading}</h3>
        {/* Separator */}
        <div className="separator"></div>
        <p className={styles.story__text}>{text}</p>
      </div>
      <Image 
        className={styles.story__img}
        src={imageSrc} 
        alt={altText} 
      />
    </figure>
  );
}

export default StorySection;