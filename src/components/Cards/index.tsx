import React from "react";

import { CardsProps } from "./Cards.types";
import styles from "./Cards.module.scss";

// * Storybook can not catch default export types
export const Cards: React.FC<CardsProps> = ({
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
