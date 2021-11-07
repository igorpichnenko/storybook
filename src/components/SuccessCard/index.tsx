import React from 'react';

import { SuccessCardProps } from './SuccessCard.types';
import styles from './SuccessCard.module.scss';
import { CardNav } from '../CardNav';
import { Button } from '../Button';
import { Redirect } from 'react-router';

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
  if (!isAuth) {
    return <Redirect to="/" />;
  }

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
        <div>загрузка...</div>
      )}
    </section>
  );
};

export { SuccessCard };
