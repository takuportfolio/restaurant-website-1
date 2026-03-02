import React from "react";

// Fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';

const MenuHeading: React.FC = () => (
  <header className={styles.topMenu__header}>
    <p className={styles.kicker}>Trending</p>
    <h2 className={styles.topMenu__heading}>Top Menu</h2>
    <p className={styles.topMenu__subheading}>You'll <span className={styles.topMenu__icon}><FontAwesomeIcon icon={faHeart} /></span> these</p>
  </header>
);

export default MenuHeading;