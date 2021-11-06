import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.scss';

import { LinkProps } from './Link.types';

export const LinkComponent: React.FC<LinkProps> = ({
  to,
  children,
  isActive,
}) => (
  <Link
    className={`${styles.link} ${`${styles[isActive ? 'isActive' : '']}`}`}
    to={to}
  >
    {isActive ? <span className={styles.activeLine}></span> : null}
    {children}
  </Link>
);
