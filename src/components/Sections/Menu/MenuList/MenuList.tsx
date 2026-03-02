import React from "react";
// Component
import type { CategoryData } from '../MenuSection/menudata.d';
import MenuItem from "../MenuItem";
import styles from './MenuList.module.scss';

interface MenuProps {
  category: CategoryData;
}

/**
 * MenuList have a variety of a menu list.
 * Such as Food, drink and more!
 */
const MenuList: React.FC<MenuProps> = ({ category }) => (
  <div className={styles.menuList}>
    <div className={styles.menuList__details}>
      <header className={styles.menuList__header}>
        <h2 className={styles.menuList__title}>{category.title}</h2>
      </header>
      <div className={styles.menuList__menus}>
        {category.items.map((item, index) => (
          <MenuItem 
            key={index} 
            {...item} 
          />
        ))}
      </div>
    </div>
  </div>
);

export default MenuList;