import React from "react";
import Button from "../Button";
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    {/* Horizontal line */}
    <div className="lineHorizontal--thin"></div>
    {/* Top Section */}
    <section className={styles.footer__sectionTop}>
      <div className={styles.sitemapContainer}>
        <nav className={styles.sitemap}>
          <ul className={`${styles.sitemap__list}`}>
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} aria-disabled="true">Press</a></li>
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} aria-disabled="true">Jobs</a></li>
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} aria-disabled="true">Contact</a></li>
          </ul>
        </nav>
        <div className="btnContainer">
          <Button variant='signup' cta='Email Signup' />
        </div>
      </div>
      <div className={styles.social}>
        <ul className={`${styles.social__list}`}>
          <li className={styles.social__item}>
            <a className={styles.social__link} aria-disabled="true">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li className={styles.social__item}>
            <a className={styles.social__link} aria-disabled="true">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className={styles.social__item}>
            <a className={styles.social__link} aria-disabled="true">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.conditional}>
        <ul className={styles.conditional__list}>
          <li className={styles.conditional__item}><a className={styles.conditional__link} aria-disabled="true">Terms and Conditions</a></li>
          <li className={styles.conditional__item}><a className={styles.conditional__link} aria-disabled="true">Privacy Policy</a></li>
          <li className={styles.conditional__item}><a className={styles.conditional__link} aria-disabled="true">Cookie Policy</a></li>
        </ul>
      </div>
    </section>
    {/* Horizontal line */}
    <div className="lineHorizontal--thin"></div>
    {/* Bottom section */}
    <section className={styles.footer__sectionBottom}>
      <div className={styles.footer__copyright}>
        <p className={styles.footer__text}>&copy; 2024 LaidBack Eats. All rights reserved.</p>
      </div>
    </section>
  </footer>
);

export default Footer;