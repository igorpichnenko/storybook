import React from 'react';

import { SuccessCardProps } from './SuccessCard.types';
import styles from './SuccessCard.module.scss';
import { CardNav } from '../CardNav';
import { Button } from '../Button';
import { useHistory } from 'react-router';
import { useStores } from '../../stores';

export const SuccessCard: React.FC<SuccessCardProps> = ({
  className,
  image,
  alt = 'my image',
  ...rest
}) => {
  const history = useHistory();
  const { authStore } = useStores();

  const userName = authStore.userName;
  const handleClickOut = () => {
    history.push('/');
  };

  return (
    <section className={`${styles.successCard}  ${className}`} {...rest}>
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

          <Button onClick={handleClickOut} type="button" variant="secondary">
            Выйти
          </Button>
        </div>
      </div>
    </section>
  );
};
