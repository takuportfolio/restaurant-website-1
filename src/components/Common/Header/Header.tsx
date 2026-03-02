import React, { useState, useRef, useEffect } from "react";
// Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logos/logo.png';
import styles from './Header.module.scss';

const Header: React.FC= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initial state is closed menu
  const menuRef = useRef<HTMLElement>(null);
  const mobileIconRef = useRef<SVGSVGElement>(null);

  const toggleNavMenu = () => {
    return setIsMenuOpen(prev => !prev);
  }

  const closeNavMenu = () => {
    setIsMenuOpen(false);
  }

  // Handle close menu by clicking outside the menu
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        mobileIconRef.current &&
        !mobileIconRef.current.contains(event.target as Node)
      ) {
        closeNavMenu();
      }
    };

    let timeoutId: ReturnType<typeof setTimeout>;
    if (isMenuOpen) {
      timeoutId = setTimeout(() => {
        // Add event listener when the component mounts or isMenuOpen changes
        document.addEventListener('mousedown', handleClickOutSide);
      }, 0);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="LaidBack logo" />
      </div>
      <nav 
        ref={menuRef}
        className={`${styles.navbar} ${isMenuOpen ? styles.open : styles.hidden}`}
        onClick={closeNavMenu}
      >
        <ul className={`linkContainer ${styles.navbar__linkMobile}`}>
          {/* Use Link for client-side navigation */}
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/" onClick={closeNavMenu}>Home</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/hoursAndLocation" onClick={closeNavMenu}>Hours & Location</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/menus" onClick={closeNavMenu}>Menus</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/aboutUs" onClick={closeNavMenu}>About Us</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/events" onClick={closeNavMenu}>Events Info</Link>
          </li>
          <div className={`btnContainer ${styles.navbar__btnMobileReserve}`}>
            <Link to="/reserve">
              <Button 
                variant='reserve' 
                cta='Reserve' 
              />
            </Link>
          </div>
        </ul>
      </nav>
      {/* Only display when screen size is $breakpoint-tablet-md: 860px */}
      <div className={`btnContainer ${styles.navbar__btnReserve}`}>
        <Link to="/reserve">
          <Button 
            variant='reserve' 
            cta='Reserve' 
          />
        </Link>
      </div>
      <FontAwesomeIcon
        className={styles.navbar__icon}
        icon={faBars}
        onClick={toggleNavMenu}
      />
    </header>
  );
};

export default Header;