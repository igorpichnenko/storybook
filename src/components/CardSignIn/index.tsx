import React, { useState } from 'react';

import { CardSignInProps } from './CardSignIn.types';
import styles from './CardSignIn.module.scss';

import { CardNav } from '../CardNav';
import { Input } from '../Input';
import { Button } from '../Button';
import { Alert } from '../Alert';
import { Form } from '../Form';
import { Spinner } from '../Spinner';

export const CardSignIn: React.FC<CardSignInProps> = ({
  className,
  handleClickAuth,
  error,
  login,
  isLoading,
  loginActiveTab,
  signInActiveTab,
  ...rest
}) => {
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
  };

  return (
    <Form
      onSubmit={handleSubmitFrom}
      className={`${styles.cardAuth}  ${className}`}
      {...rest}
    >
      <div className={styles.wrapper}>
        <CardNav
          isSimpleHeader
          loginActiveTab={loginActiveTab}
          signInActiveTab={signInActiveTab}
        />

        <div className={styles.cardFooter}>
          {error ? (
            <div className={styles.error}>
              <Alert
                children={error['error_message']}
                image="alert"
                alt="alert"
              />
            </div>
          ) : null}
          <div className={styles.inputEmail}>
            <Input
              error={error && error['error_message']}
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
              error={error && error['error_message']}
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
            {isLoading ? (
              <Spinner isLoading={isLoading} styles="border-color: blue" />
            ) : (
              <Button type="submit" variant="primary">
                Зарегистрироваться
              </Button>
            )}
          </div>
          <div className={styles.buttonPass}>
            <Button type="submit" variant="dim">
              Не помню пароль
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};
