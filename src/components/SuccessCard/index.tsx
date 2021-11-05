import React, { useEffect } from 'react';

import useState from 'storybook-addon-state';
import { SuccessCardProps } from './SuccessCard.types';
import styles from './SuccessCard.module.scss';
import { CardNav } from '../CardNav';
import { Button } from '../Button';

export const SuccessCard: React.FC<SuccessCardProps> = ({
  className,
  image,
  handleClickOut,
  ...rest
}) => {
  const [userName, setUserName] = useState('name', ['']);
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch('https://0gyog.mocklab.io/users/8/', {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const response = await resp.json();

        setUserName(response.user.name);
      } catch (e) {
        setUserName(['']);
      }
    })();
  }, []);

  return (
    <section className={`${styles.successCard}  ${className}`} {...rest}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <CardNav isLink={false} />
        </div>
        <div className={styles.items}>
          <img className={styles.icon} src={`/${image}.svg`} alt="my image" />
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
