import React from "react";
// Component
import Image from ".";

interface ImageGalleryProps {
  images: string[];
  altText?: string;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, altText = 'Gallery image', className 
}) => (
  <>
  {images.map((src, index) => (
    <Image 
    key={index} 
    className={className}
    src={src}
    alt={altText}
    />
  ))}
  </>
);

export default ImageGallery;