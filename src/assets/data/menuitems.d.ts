// src/components/Menu/data/menuitems.ts
import type { MenuItemData } from '../../types/menuType';

// Home menu images
import homeTopMenu1 from '../images/home/top-menu-1.png';
import homeTopMenu2 from '../images/home/top-menu-2.png';
import homeTopMenu3 from '../images/home/top-menu-3.png';

// Main menu images (assuming different images or just using existing ones for example)
import mainMenu1 from '../images/menu/menu-1.png'; // Example for main menu
import mainMenu2 from '../images/menu/menu-2.png';
import mainMenu3 from '../images/menu/menu-3.png';

// --- Home Page Menu Items ---
export const homeMenuItems: MenuItemData[] = [
  {
    id: 'home-pizza-margherita',
    title: 'Classic Margherita Pizza',
    description: 'Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust',
    price: '$14',
    menuSrc: homeTopMenu1,
    menuAlt: 'Classic Margherita Pizza',
    isFull: false,
  },
  {
    id: 'home-deluxe-pepperoni',
    title: 'Deluxe Pepperoni Pizza',
    description: 'Spicy pepperoni, gooey mozzarella, and a hint of smoked paprika on our signature crust',
    price: '$16',
    menuSrc: homeTopMenu2,
    menuAlt: 'Deluxe Pepperoni Pizza',
    isFull: false,
  },
  {
    id: 'home-gourmet-chef-special', // This will be your "full" card's menu item on home
    title: 'Gourmet Chef\'s Special',
    description: 'Experience our chef\'s daily creation, a symphony of seasonal ingredients and bold flavors',
    price: '$25',
    menuSrc: homeTopMenu3,
    menuAlt: 'Gourmet Chef\'s Special',
    isFull: true,
  },
];

// --- Main Menu Page Items ---
export const mainMenuItems: MenuItemData[] = [
  {
    id: 'main-breakfast-burrito',
    title: 'Breakfast Burrito',
    description: 'Scrambled eggs, cheese, sausage, and veggies wrapped in a warm tortilla.',
    price: '$12',
    menuSrc: mainMenu1,
    menuAlt: 'Breakfast Burrito',
    isFull: false,
  },
  {
    id: 'main-avocado-toast',
    title: 'Avocado Toast',
    description: 'Toasted sourdough, smashed avocado, chili flakes, and a poached egg.',
    price: '$10',
    menuSrc: mainMenu2,
    menuAlt: 'Avocado Toast',
    isFull: false,
  },
  {
    id: 'main-signature-brunch-platter', // This could be a full card on the main menu
    title: 'Signature Brunch Platter',
    description: 'A lavish spread of pancakes, bacon, fresh fruit, and maple syrup.',
    price: '$30',
    menuSrc: mainMenu3,
    menuAlt: 'Signature Brunch Platter',
    isFull: true,
  },
  // Add more items specific to your main menu here
];