import React from "react";
import styles from './Button.module.scss';

// Button variant: 'primary' | 'secondary' | 'reserve'
interface ButtonProps  {
  variant?: string;
  cta: string;
}

const Button: React.FC<ButtonProps> = ({ variant, cta }) => (
  <button className={`${styles.btn} ${styles[`btn--${variant}`]}`}>{cta}</button>
);

export default Button;