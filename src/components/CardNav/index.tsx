import React from 'react';

import { CardNavProps } from './CardNav.types';
import styles from './CardNav.module.scss';
import { Logo } from '../Logo';
import { LinkComponent } from '../Link';

export const CardNav: React.FC<CardNavProps> = ({
  className,
  isLink,
  isSimpleHeader,
  loginActiveTab,
  signInActiveTab,
  ...rest
}) => {
  const noLinkHeader = isSimpleHeader ? ' ' : styles.simple;
  return (
    <section
      className={`${styles.cardNav}  ${className} ${noLinkHeader}`}
      {...rest}
    >
      <div className={styles.logotype}>
        <Logo image="logo" alt="logo" />
      </div>
      {isSimpleHeader ? (
        <div className={styles.links}>
          <LinkComponent to="/" children="Вход" isActive={loginActiveTab} />
          <div className={styles.reg}>
            <LinkComponent
              to="/signIn"
              children="Регистрация"
              isActive={signInActiveTab}
              activeTab={signInActiveTab}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};
