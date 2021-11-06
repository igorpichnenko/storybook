import React from 'react';

import { CardAuthProps } from './CardAuth.types';
import styles from './CardAuth.module.scss';
import { CardNav } from '../CardNav';
import { Input } from '../Input';
import { Button } from '../Button';
import { Alert } from '../Alert';

export const CardAuth: React.FC<CardAuthProps> = ({
  className,
  handleClickAuth,
  ...rest
}) => {
  const error = null;
  const handleSubmitFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    /*   (async () => {
      try {
        const resp = await fetch('https://0gyog.mocklab.io/users/auth/', {
          method: 'POST',
          body: `login=${login[0]}&password=${password[0]}`,
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const response = await resp.json();
      
      } catch (errors) {
      
      }
    })(); */
  };
  const handleButtonAuthClick = () => {};
  return (
    <form
      onSubmit={handleSubmitFrom}
      className={`${styles.cardAuth}  ${className}`}
      {...rest}
    >
      <div className={styles.wrapper}>
        <CardNav isLink />

        <div className={styles.cardFooter}>
          {error ? (
            <div className={styles.error}>
              <Alert children="Ой-ёй" image="alert" />{' '}
            </div>
          ) : null}
          <div className={styles.inputEmail}>
            <Input
              error={error ? 'Ой-ёй' : ''}
              name="email"
              type="text"
              variant="primary"
              placeholder="Логин или Почта"
              image="email"
              text="Логин или почта"
              id="email"
              htmlFor="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                console.log(e)
              }
            />
          </div>
          <div className={styles.passInput}>
            <Input
              error={error ? 'Ой-ёй' : ''}
              type="password"
              variant="secondary"
              placeholder="Пароль"
              image="key"
              text="Пароль"
              id="password"
              htmlFor="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                console.log(e)
              }
            />
          </div>

          <div className={styles.buttonAuth}>
            <Button
              onClick={handleButtonAuthClick}
              type="submit"
              variant="primary"
            >
              Войти
            </Button>
          </div>
          <div className={styles.buttonPass}>
            <Button type="submit" variant="dim">
              Не помню пароль
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
