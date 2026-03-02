import React from 'react';

// Component
import { MenuCard, SpecialMenuBlock, MenuSection } from '../../components/Sections/Menu';
// Data
import { homeMenuItems } from '../../assets/data/menuitems.d';

const MenuPage: React.FC = () => {
  return (
    <>
      <MenuCard menuItems={homeMenuItems} />
      <SpecialMenuBlock />
      <MenuSection />
    </>
  );
};

export default MenuPage;