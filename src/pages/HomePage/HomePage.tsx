import React from 'react';

// Component
import { MenuCard } from '../../components/Sections/Menu';
import HomeAboutUs from '../../components/Sections/HomeAboutUs';


// Sections
import HeroSection from '../../components/Sections/Hero';
import ExperienceSection from '../../components/Sections/Experience/Experience';
import ExploreMoreSection from '../../components/Sections/ExploreMore';
import HomeEvent from '../../components/Sections/HomeEvent';
// Data
import { homeMenuItems } from '../../assets/data/menuitems.d';
// Style
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Homepage */}
      <div className={styles.homepage}>
        {/* Hero Section */}
        <HeroSection />
        {/* Top Menu */}
        <MenuCard menuItems={homeMenuItems} />
        {/* Experience Section */}
        <ExperienceSection />
        {/* Explore Gallery Section */}
        <ExploreMoreSection />
        {/* About Us */}
        <HomeAboutUs />
        {/* Event Section */}
        <HomeEvent />
      </div>
    </>
  );
};

export default HomePage;
