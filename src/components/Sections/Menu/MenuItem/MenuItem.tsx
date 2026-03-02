import React from "react";
// Component
import styles from './MenuItem.module.scss';

// Interface
interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => (
  <div className={`${styles.menuItem} ${description ? '' : styles.noDescription}`}>
    <h5 className={styles.menuItem__name}>{name}</h5>
    <div className={styles.menuItem__description}>
      {/* Description is optional */}
      {description && (
        <p className={styles.menuItem__body}>{description}</p>
      )}
      <span className={styles.menuItem__price}>{price}</span>
    </div>
  </div>
);

export default MenuItem;