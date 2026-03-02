import React from 'react';

// Components
import Image from '../../components/Common/Image';
import StorySection from '../../components/Sections/Story';
// Images
import AboutUsImageTop from '../../assets/images/aboutUs/aboutus-top.png';
import AboutUsImageBottom from '../../assets/images/aboutUs/aboutus-bttom.png';
// Data
import storyData from '../../assets/data/storydata.d';
// Type
import type StoryType from '../../types/storyType';
// style
import styles from './AboutUsPage.module.scss';


const AboutUs: React.FC = () => {
  return (
    <>
    <section className={styles.aboutUs}>
      {/* Top Banner */}
      <div className={styles.banner}>
        <h1 className={styles.banner__heading} aria-label='About Us'>About US</h1>
        <Image 
          className={styles.banner__img}
          src={AboutUsImageTop} 
          alt="About us image" 
        />
      </div>
      {/* Story sections */}
      <article className={styles.story}>
        {storyData.map((story: StoryType, index: number) => (
          <StorySection 
            key={index} 
            {...story} 
            reverse={index % 2 === 0}
          />
        ))}
      </article>
      {/* Bottom Banner */}
      <div className={styles.banner}>
        <Image 
          className={styles.banner__img}
          src={AboutUsImageBottom} 
          alt="About us image" 
        />
      </div>
    </section>
    </>
  )
};

export default AboutUs;