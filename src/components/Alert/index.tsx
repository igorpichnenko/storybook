import React from 'react';

import { AlertProps } from './Alert.types';
import styles from './Alert.module.scss';

export const Alert: React.FC<AlertProps> = ({
  children,
  className,
  image,
  alt = 'my image',
  ...rest
}) => (
  <div className={`${styles.alert}  ${className}`} {...rest}>
    <div className={styles.items}>
      <img className={styles.icon} src={`/${image}.svg`} alt={alt} />
      {children}
    </div>
  </div>
);
