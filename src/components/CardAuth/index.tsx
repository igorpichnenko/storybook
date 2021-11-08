import React, { useState } from 'react';

import { CardAuthProps } from './CardAuth.types';
import styles from './CardAuth.module.scss';

import { CardNav } from '../CardNav';
import { Form, Inputs } from '../Form';
import { LoginRequest } from '../../stores/Auth/AuthStore';

const CardAuth: React.FC<CardAuthProps> = ({
  className,
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

  const handleSubmitFrom = ({ username, password }: LoginRequest) => {
    login({ username, password });
  };

  return (
    <div className={`${styles.cardAuth}  ${className}`} {...rest}>
      <div className={styles.wrapper}>
        <CardNav
          isSimpleHeader
          loginActiveTab={loginActiveTab}
          signInActiveTab={signInActiveTab}
        />

        <Form
          buttonText="Войти"
          error={error}
          isLoading={isLoading}
          handleOnchangeName={handleOnchangeName}
          handleOnchangePassword={handleOnchangePassword}
          onSubmitHandleForm={handleSubmitFrom}
        ></Form>
      </div>
    </div>
  );
};

export { CardAuth };
