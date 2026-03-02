import React from "react";

// Image
import styles from './HoursAndLocationPage.module.scss';

const HoursAndLocation: React.FC = () => {
  return (
    <div className={styles.hoursAndLocation}>
      <div className={styles.hoursAndLocation__content}>
        {/* <div className={styles.logoContainer}>
          <img src={logoLarge} alt="LaidBack logo" />
        </div> */}
        <div className={styles.hoursAndLocation__description}>
          <div className={styles.hoursAndLocation__titleContainer}>
            <h1 className={styles.hoursAndLocation__title}>HOURS &<br />LOCATION</h1>
          </div>
          <div className={styles.hoursAndLocation__textContainer}>
            <p className={styles.hoursAndLocation__text}>Address: 304 E Cesar Chavez St, Austin, TX 78701, United States</p>
            <p className={styles.hoursAndLocation__text}>[Lunch] 11:30 AM - 1:30 AM</p>
            <p className={styles.hoursAndLocation__text}>[Dinner] 5:30 PM - 9:30 PM (Last Order 9:30)</p>
          </div>
        </div>
      </div>
      <div className={styles.hoursAndLocation__mapContainer}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.0965231629043!2d-97.7415705!3d30.262830899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a820ed8a3f%3A0x260e7ddb8ae7e0a7!2s304%20E%20Cesar%20Chavez%20St%2C%20Austin%2C%20TX%2078701%2C%20USA!5e0!3m2!1sen!2sjp!4v1748628667550!5m2!1sen!2sjp" 
          width="800" 
          height="450" 
          className={styles.hoursAndLocation__map}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
        />
      </div>
    </div>
  );
};

export default HoursAndLocation;