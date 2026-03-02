import React from "react";
// Component
import Image from "../../../Common/Image";
import { DoubleLine } from "../../../Common/Lines";
import MenuList from "../MenuList";
import { drinkMenuData, foodMenuData } from "./menudata.d";
// styles
import styles from './MenuSection.module.scss';
// Images
import sideImage from '../../../../assets/images/menu/menu-4.png'
import dessertImage from '../../../../assets/images/menu/menu-5.png'

const MenuSection: React.FC = () => (
  <>
    {/* Menu list section */}
    <section className={styles.menu}>
      {/* Menu list heading */}
      <div className={styles.menu__headingContainer}>
        <DoubleLine />
        <h2 className={styles.menu__heading}>Menu</h2>
        <DoubleLine />
      </div>
      {/* Menu list */}
      <div className={styles.menu__menus}>
        {/* Food menu */}
        <div className={styles.menu__menusContainer}>
          <h3 className={styles.menu__title}>Food</h3>
          {foodMenuData.map((category) => (
            <>
              <MenuList key={category.title} category={category} />
              {category.title === 'Side & More' && (
                <Image 
                  className={styles.menu__img}
                  src={sideImage} 
                  alt="side & more image" />
              )}
              {category.title === 'Desserts' && (
                <Image 
                  className={styles.menu__img}
                  src={dessertImage} 
                  alt="dessert image" 
                />
              )}
            </>
          ))}
        </div>
        {/* Drink menu */}
        <div className={styles.menu__menusContainer}>
          <h3 className={styles.menu__title}>Drink</h3>
          {drinkMenuData.map((category) => (
            <>
              <MenuList key={category.title} category={category} />
            </>
          ))
          }
        </div>
      </div>
    </section>
  </>
);

export default MenuSection;