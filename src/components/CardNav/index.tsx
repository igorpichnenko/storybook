import React from 'react';

import { CardNavProps } from './CardNav.types';
import styles from './CardNav.module.scss';
import { Logo } from '../Logo';
import { LinkComponent } from '../Link';

export const CardNav: React.FC<CardNavProps> = ({
  className,
  isLink,
  ...rest
}) => {
  const noLinkHeader = isLink ? ' ' : styles.simple;
  return (
    <section
      className={`${styles.cardNav}  ${className} ${noLinkHeader}`}
      {...rest}
    >
      <div className={styles.logotype}>
        <Logo image="logo" />
      </div>
      {isLink ? (
        <div className={styles.links}>
          <LinkComponent to="/auth" children="Вход" isActive />
          <div className={styles.reg}>
            <LinkComponent
              to="/registration"
              children="Регистрация"
              isActive={false}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};
