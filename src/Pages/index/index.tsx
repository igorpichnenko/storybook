import React from "react";

import { IndexProps } from "./index.types";
import styles from "./index.module.scss";
import { CardAuth } from "../../components/CardAuth";

export const Index: React.FC<IndexProps> = ({
  children,
  className,
  image,
  handleClickOut,
  ...rest
}) => (
  <section className={`${styles.index}  ${className}`} {...rest}>
    <CardAuth />
  </section>
);
