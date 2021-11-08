import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { FormProps } from './Form.types';
import styles from './Form.module.scss';
import { Alert } from '../Alert';
import { Input } from '../Input';
import { Spinner } from '../Spinner';
import { Button } from '../Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type Inputs = {
  username: string;
  password: string;
};

export const Form: React.FC<FormProps> = ({
  children,
  error,
  isLoading,
  handleOnchangeName,
  handleOnchangePassword,
  buttonText,
  onSubmitHandleForm,
  ...rest
}) => {
  const schema = yup
    .object({
      username: yup.string().required().min(2),
      password: yup.number().positive().integer().required().min(5),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler: SubmitHandler<Inputs> = (data) =>
    onSubmitHandleForm(data);

  return (
    <form {...rest} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles.form}>
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
            formError={errors}
            register={register}
            required
            error={error && error['error_message']}
            name="username"
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
          {errors.username && (
            <span className={styles.errors}>{errors.username?.message}</span>
          )}
        </div>
        <div className={styles.passInput}>
          <Input
            formError={errors}
            name="password"
            required
            register={register}
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
          {errors.password && (
            <span className={styles.errors}>{errors.password?.message}</span>
          )}
        </div>

        <div className={styles.buttonAuth}>
          {isLoading ? (
            <Spinner isLoading={isLoading} styles="border-color: blue" />
          ) : (
            <Button type="submit" variant="primary">
              {buttonText}
            </Button>
          )}
        </div>
        <div className={styles.buttonPass}>
          <Button type="submit" variant="dim">
            Не помню пароль
          </Button>
        </div>
      </div>
    </form>
  );
};
