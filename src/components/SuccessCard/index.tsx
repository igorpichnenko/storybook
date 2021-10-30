import React from "react";

import { SuccessCardProps } from "./SuccessCard.types";
import styles from "./SuccessCard.module.scss";
import { CardNav } from "../CardNav";
import { Button } from "../Button";

export const SuccessCard: React.FC<SuccessCardProps> = ({
  children,
  className,
  image,
  ...rest
}) => (
  <section className={`${styles.successCard}  ${className}`} {...rest}>
    <div className={styles.nav}>
      <CardNav isLink={false} />
    </div>
    <div className={styles.items}>
      <img className={styles.icon} src={`/${image}.svg`} alt="my image" />
      <h1 className={styles.title}>
        Поздравляем, Username!
        <br /> Вы успешно авторизированны
      </h1>

      <Button type="button" variant="secondary">
        Выйти
      </Button>
    </div>
  </section>
);
