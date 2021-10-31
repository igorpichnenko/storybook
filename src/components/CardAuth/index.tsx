import React, { useEffect } from "react";

import { CardAuthProps } from "./CardAuth.types";
import styles from "./CardAuth.module.scss";
import { CardNav } from "../CardNav";
import { Input } from "../Input";
import { Button } from "../Button";
import { Alert } from "../Alert";
import axios from "axios";

export const CardAuth: React.FC<CardAuthProps> = ({
  className,
  error,
  handleClickAuth,
  ...rest
}) => {
  const handleButtonAuthClick = () => {
    const formData = new FormData();
    const login = "Alex";
    const password = "123456";
    formData.append("login", "Alex");
    formData.append("password", "123456");

    //(async () => {
    //  try {
    //    const resp = await axios.post("https://0gyog.mocklab.io/users/auth/", formData, {
    //      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    //    });
    //  } catch (e) {
    //    console.log(e);
    //  }
    //})();
    (async () => {
      try {
        const resp = await fetch("https://0gyog.mocklab.io/users/auth/", {
          method: "POST",
          body: `login=${login}&password=${password}`,
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        console.log(await resp.json());
      } catch (e) {
        console.log(e);
      }
    })();
    handleClickAuth();
  };
  return (
    <form className={`${styles.cardAuth}  ${className}`} {...rest}>
      <CardNav isLink />
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
          <Button
            onClick={handleButtonAuthClick}
            type="button"
            variant="primary"
          >
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
