import React from "react";
// Component
import Image from "../../Common/Image";
import styles from './Experience.module.scss';
import expImage from '../../../assets/images/home/experience.png';

import { experienceMenuItems } from '../../../assets/data/experienceitems.d';

const ExperienceSection: React.FC = () => (
  <section className={styles.experience}>
    <div className={styles.experience__details}>
      <header className={styles.experience__header}>
        <h2 className={styles.experience__title}>Experience<br />Fresh Ingredients</h2>
      </header>
      <div className={styles.experience__menus}>
        {experienceMenuItems.map((item, index) => {
          const isLastItem = index === experienceMenuItems.length - 1; // Determine last item here
          return (
            <React.Fragment key={item.id}>
              {/* Show the line only if the last item */}
              {isLastItem &&  <div className="lineHorizontal"></div>}
              <div key={item.id} className={styles.experience__menu}>
                <h3 className={styles.experience__name}>{item.title}</h3>
                <div className={styles.experience__description}>
                  <p className={styles.experience__body}>{item.description}</p>
                  <span className={styles.experience__price}>{item.price}</span>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
    {/* Image */}
    <Image
      className={styles.experience__imgContainer}
      src={expImage}
      alt='Experience Image'
    />
  </section>
);

export default ExperienceSection;