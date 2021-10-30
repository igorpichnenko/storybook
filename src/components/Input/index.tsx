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
    {withIcon ? (
      <div
        style={{ backgroundImage: `url(static/media/src/assets/${image}.svg)` }}
        className={styles.inputIcon}
      ></div>
    ) : null}
  </div>
);
