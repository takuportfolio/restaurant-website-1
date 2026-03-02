import React from 'react';
// Style
import styles from './Block.module.scss';

export const EventBlock: React.FC = () => (
  <div className={styles.discover}>
    <header className={styles.discover__header}>
      <h3 className={styles.discover__headline}>Discover upcoming special events</h3>
    </header>
  </div>
);


// Add more different block styles component below...