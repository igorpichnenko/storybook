import React from "react";

import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input: React.FC<InputProps> = ({
  variant,
  className,
  image,
  error,
  text,
  htmlFor,
  id,
  ...rest
}) => {
  const inputClass = error ? styles.inputRed : "";

  return (
    <div className={styles.inputWrap}>
      <div className={styles.items}>
        <div className={styles.form}>
          <input
            className={`${
              styles.input
            } ${`${styles[variant]}`} ${className} ${inputClass}`}
            id={id}
            {...rest}
          />
          <label htmlFor={htmlFor} className={styles.label}>
            {text}
          </label>
        </div>
        {error ? <span className={styles.error}>{error}</span> : null}

        <img
          className={styles.inputIcon}
          src={`/${image}.svg`}
          alt="my image"
        />
      </div>
    </div>
  );
};
