// src/components/Menu/Menu.tsx (or MenuCard.tsx as per your preference for the main component)
import React from 'react';

// Sub components
import MenuCardItem from './MenuCardItem';
import FullMenuCard from './FullMenuCard';
import MenuHeading from '../MenuHeading'; // Assuming you have this component

// Data imports
// import { homeMenuItems } from './data/menuitems';
import { reviewItemData } from '../../../../assets/data/revieweritems.d'; // Import the *single* general review
// Styles
import styles from '../Menu.module.scss';
// type
import type { MenuItemData } from '../../../../types/menuType';

interface MenuCardProps {
  menuItems: MenuItemData[];
  // You might also pass a prop to customize the heading if needed, e.g., headingTitle: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ menuItems }) => { // Renamed from Menu to MenuCard to match your original
  return (
    <section className={styles.topMenu}>
      <MenuHeading />
      <div className={styles.topMenuContainer}>
        {menuItems.map((item) => {
          if (item.isFull) {
            return (
              <FullMenuCard
                key={item.id}
                item={item}
                review={reviewItemData}
              />
            );
          } else {
            return (
              <MenuCardItem
                key={item.id}
                item={item}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default MenuCard;