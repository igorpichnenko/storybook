import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Link.module.scss';

import { LinkProps } from './Link.types';

export const LinkComponent: React.FC<LinkProps> = ({
  to,
  children,
  isActive,
  activeTab,
}) => {
  return (
    <Route>
      <Link
        className={`${styles.link} ${`${styles[isActive ? 'isActive' : '']}`}`}
        to={to}
      >
        {isActive ? (
          <span
            className={
              activeTab
                ? `${styles.activeLine} ${styles.right}`
                : styles.activeLine
            }
          ></span>
        ) : (
          ''
        )}
        {children}
      </Link>
    </Route>
  );
};
