// src/components/Menu/data/revieweritems.ts
import type { ReviewData } from '../../types/menuType';

// Correct relative paths for image imports
import avatar from '../images/home/avatar.png';
import logoWebflow from '../images/home/logo-webflow.png';

export const reviewItemData: ReviewData = {
  id: 'restaurant-review-1', // A unique ID for this general restaurant review
  quote: 'A perfect spot for casual dining with friends!',
  reviewerName: 'Mark Thompson',
  reviewerTitle: 'Event Planner',
  reviewerAvatarSrc: avatar, // Access .src property
  reviewerAvatarAlt: 'Mark Thompson',
  brandLogoSrc: logoWebflow, // Access .src property
  brandLogoAlt: 'Webflow',
  rating: 5,
};