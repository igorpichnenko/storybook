import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { CardAuthProps } from './CardAuth.types';
import styles from './CardAuth.module.scss';
import { CardNav } from '../CardNav';
import { Input } from '../Input';
import { Button } from '../Button';
import { Alert } from '../Alert';
import { useStores } from '../../stores';

export const CardAuth: React.FC<CardAuthProps> = ({
  className,
  handleClickAuth,
  error,
  ...rest
}) => {
  const { authStore } = useStores();
  const isAuth = authStore.isAuthenticated;
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnchangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleOnchangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    authStore.login({ username, password });
    if (isAuth) {
      history.push('success');
    }
  };
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
              <Alert children="Ой-ёй" image="alert" alt="alert" />{' '}
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
              alt="email"
              onChange={handleOnchangeName}
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
              alt="password"
              onChange={handleOnchangePassword}
            />
          </div>

          <div className={styles.buttonAuth}>
            <Button type="submit" variant="primary">
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
