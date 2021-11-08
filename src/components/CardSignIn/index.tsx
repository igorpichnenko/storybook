import React, { useState } from 'react';

import { CardSignInProps } from './CardSignIn.types';
import styles from './CardSignIn.module.scss';

import { CardNav } from '../CardNav';
import { Form, Inputs } from '../Form';

export const CardSignIn: React.FC<CardSignInProps> = ({
  className,
  error,
  onSubmitHandleForm,
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

  const handleSubmitFrom = (data: Inputs) => {};

  return (
    <div className={`${styles.cardAuth}  ${className}`} {...rest}>
      <div className={styles.wrapper}>
        <CardNav
          isSimpleHeader
          loginActiveTab={loginActiveTab}
          signInActiveTab={signInActiveTab}
        />

        <Form
          buttonText="Зарегистрироваться"
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
