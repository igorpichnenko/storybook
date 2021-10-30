import React from "react";

import { CardAuthProps } from "./CardAuth.types";
import styles from "./CardAuth.module.scss";
import { CardNav } from "../CardNav";
import { Input } from "../Input";
import { Button } from "../Button";
import { Alert } from "../Alert";

export const CardAuth: React.FC<CardAuthProps> = ({
  variant,
  children,
  className,
  error,
  ...rest
}) => (
  <section
    className={`${styles.cardAuth} ${`${styles[variant]}`} ${className}`}
    {...rest}
  >
    <CardNav variant="primary" />
    <div className={styles.cardFooter}>
      <div className={styles.inputs}>
        {error ? (
          <div className={styles.error}>
            <Alert children="Ой-ёй" image="alert" />{" "}
          </div>
        ) : null}
        <Input
          type="email"
          variant="primary"
          placeholder="Логин или Почта"
          image="email"
        />

        <Input
          type="password"
          variant="secondary"
          placeholder="Пароль"
          image="key"
        />
      </div>
      <div className={styles.buttons}>
        <Button type="button" variant="primary">
          Войти
        </Button>
        <Button type="button" variant="dim">
          Не помню пароль
        </Button>
      </div>
    </div>
  </section>
);
