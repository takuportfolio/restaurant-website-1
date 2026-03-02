import React from 'react';

// Component
import Image from "../../../Common/Image";
import styles from "./SpecialMenuBlock.module.scss";

import specialMenu1 from '../../../../assets/images/menu/image-1.png'
import specialMenu2 from '../../../../assets/images/menu/image-2.png'

const SpecialMenuBlock: React.FC = () => (
  <div className={styles.specialMenuBlock}>
    <Image className={styles.specialMenuBlock__img} src={specialMenu1} alt="Special menu 1" />
    <h3 className={styles.specialMenuBlock__heading}>Special Menu</h3>
    <Image className={styles.specialMenuBlock__img} src={specialMenu2} alt="Special menu 2" />
  </div>
);

export default SpecialMenuBlock;