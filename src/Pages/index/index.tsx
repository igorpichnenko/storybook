import React from "react";

import { IndexProps } from "./index.types";
import styles from "./SuccessCard.module.scss";

export const SuccessCard: React.FC<IndexProps> = ({
  children,
  className,
  image,
  handleClickOut,
  ...rest
}) => (
  <section
    className={`${styles.successCard}  ${className}`}
    {...rest}
  ></section>
);
