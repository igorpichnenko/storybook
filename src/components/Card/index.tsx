import React from "react";

import { CardProps } from "./Card.types";
import styles from "./Card.module.scss";

// * Storybook can not catch default export types
export const Card: React.FC<CardProps> = ({
  variant,
  children,
  className,
  ...rest
}) => (
  <section
    className={`${styles.card} ${`${styles[variant]}`} ${className}`}
    {...rest}
  >
    {children}
  </section>
);
