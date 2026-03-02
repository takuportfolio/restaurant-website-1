// Define your interfaces here
export interface MenuItemData {
  id: string;
  title: string;
  description: string;
  price: string;
  menuSrc: string;
  menuAlt: string;
  isFull?: boolean;
  reviewId?: string;
}

export interface ReviewData {
  id: string;
  quote: string;
  reviewerName: string;
  reviewerTitle: string;
  reviewerAvatarSrc: string;
  reviewerAvatarAlt: string;
  brandLogoSrc: string;
  brandLogoAlt: string;
  rating: number;
}