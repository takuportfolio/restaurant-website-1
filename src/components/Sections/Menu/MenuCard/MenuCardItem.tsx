import React from 'react';
import Image from '../../../Common/Image/Image'; // Adjust path if needed
import type { MenuItemData } from '../../../../types/menuType';
import styles from '../Menu.module.scss';

interface MenuCardItemProps {
  item: MenuItemData;
}

const MenuCardItem: React.FC<MenuCardItemProps> = ({ item }) => (
  <article className={styles.topMenu__card}> {/* No topMenu__cardFull here */}
    <div className={styles.topMenu__content}>
      <Image
        className={styles.topMenu__imgContainer}
        src={item.menuSrc}
        alt={item.menuAlt}
      />
      <div className={styles.topMenu__details}>
        <h3 className={styles.topMenu__title}>{item.title}</h3>
        <div className={styles.topMenu__text}>
          <p className={styles.topMenu__body}>{item.description}</p>
          <span className={styles.topMenu__price}>{item.price}</span>
        </div>
      </div>
    </div>
  </article>
);

export default MenuCardItem;