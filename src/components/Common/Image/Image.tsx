import React from 'react';
import type { ImageProps } from './type';

const Image: React.FC<ImageProps> = ({ src, alt, figcaption, className, icon }) => (
  <figure className={className}>
    {icon && <span className={`styles.${className}`}></span>}
    {src && <img src={src} alt={alt} />}
    {figcaption && (
      <figcaption>{figcaption}</figcaption>
    )}
  </figure>
);

export default Image;