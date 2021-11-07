import React from 'react';

import { SuccessCardProps } from './SuccessCard.types';
import styles from './SuccessCard.module.scss';

import { CardNav } from '../CardNav';
import { Button } from '../Button';
import { Spinner } from '../Spinner';

const SuccessCard: React.FC<SuccessCardProps> = ({
  className,
  image,
  alt = 'my image',
  userName,
  isLoading,
  isAuth,
  logout,
  ...rest
}) => {
  return (
    <section className={`${styles.successCard}  ${className}`} {...rest}>
      {userName ? (
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <CardNav isLink={false} />
          </div>
          <div className={styles.items}>
            <img className={styles.icon} src={`/${image}.svg`} alt={alt} />
            <h1 className={styles.title}>
              Поздравляем, {userName}!
              <br /> Вы успешно авторизированны
            </h1>

            <Button onClick={logout} type="button" variant="secondary">
              Выйти
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.spinner}>
          <Spinner styles="border-color: teal" isLoading={isLoading} />
        </div>
      )}
    </section>
  );
};

export { SuccessCard };
