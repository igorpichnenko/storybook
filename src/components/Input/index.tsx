import React from "react";

import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";
import { Alert } from "../Alert";

export const Input: React.FC<InputProps> = ({
  variant,
  children,
  className,
  withIcon,
  image,
  error,
  text,
  ...rest
}) => (
  <div className={styles.inputWrap}>
    <div className={styles.items}>
      <label>
        {text}
        <input
          className={`${styles.input} ${`${styles[variant]}`} ${className}`}
          {...rest}
        />
        {error ? <span className={styles.error}>{error}</span> : null}
      </label>
      <img
        className={styles.inputIcon}
        src={require(`../../../public/${image}.svg`)}
      />
    </div>
  </div>
);
