import React from 'react';

import { InputProps } from './Input.types';
import styles from './Input.module.scss';

export const Input: React.FC<InputProps> = ({
  variant,
  className,
  image,
  error,
  text,
  htmlFor,
  id,
  name,
  register,
  required,
  formError,
  alt = 'my image',
  ...rest
}) => {
  const inputErrorColor = error ? styles.inputRed : '';
  const inputFormErrorColor = formError.username?.message
    ? styles.inputFormErrors
    : '';
  const reg = register ? register : () => console.log('no validate');
  return (
    <div className={styles.inputWrap}>
      <div className={styles.items}>
        <div className={styles.form}>
          <input
            autoComplete="off"
            {...reg(name, { required })}
            className={`${
              styles.input
            } ${`${styles[variant]}`}  ${inputErrorColor} ${className}  ${inputFormErrorColor}`}
            id={id}
            {...rest}
          />
          <label htmlFor={htmlFor} className={styles.label}>
            {text}
          </label>
        </div>
        {error ? <span className={styles.error}>{error}</span> : null}

        <img className={styles.inputIcon} src={`/${image}.svg`} alt={alt} />
      </div>
    </div>
  );
};
