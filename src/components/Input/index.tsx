import React from "react";

import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input: React.FC<InputProps> = ({
  variant,
  children,
  className,
  withIcon,
  image,
  ...rest
}) => (
  <div className={styles.inputWrap}>
    <input
      className={`${styles.input} ${`${styles[variant]}`} ${className}`}
      {...rest}
    />
    <img
      className={styles.inputIcon}
      src={require(`../../public/${image}.svg`)}
    />
  </div>
);
