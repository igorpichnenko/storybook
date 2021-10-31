import React from "react";

import { CardAuthProps } from "./CardAuth.types";
import styles from "./CardAuth.module.scss";
import { CardNav } from "../CardNav";
import { Input } from "../Input";
import { Button } from "../Button";
import { Alert } from "../Alert";

export const CardAuth: React.FC<CardAuthProps> = ({
  className,
  error,
  handleClick,
  ...rest
}) => {
  return (
    <form className={`${styles.cardAuth}  ${className}`} {...rest}>
      <CardNav />
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
            text="Логин или почта"
            id="email"
            htmlFor="email"
          />
          <div className={styles.passInput}>
            <Input
              type="password"
              variant="secondary"
              placeholder="Пароль"
              image="key"
              text="Пароль"
              id="password"
              htmlFor="password"
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={handleClick} type="button" variant="primary">
            Войти
          </Button>

          <div className={styles.pass}>
            <Button type="button" variant="dim">
              Не помню пароль
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
