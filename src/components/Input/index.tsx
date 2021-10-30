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
  ...rest
}) => (
  <div className={styles.inputWrap}>
    {error ? (
      <div className={styles.error}>
        <Alert children="Ой-ёй" image="alert" />{" "}
      </div>
    ) : null}
    <div className={styles.items}>
      <input
        className={`${styles.input} ${`${styles[variant]}`} ${className}`}
        {...rest}
      />
      <img
        className={styles.inputIcon}
        src={require(`../../../public/${image}.svg`)}
      />
    </div>
  </div>
);
