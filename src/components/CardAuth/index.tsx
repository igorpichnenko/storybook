import React from "react";
import useState from "storybook-addon-state";

import { CardAuthProps } from "./CardAuth.types";
import styles from "./CardAuth.module.scss";
import { CardNav } from "../CardNav";
import { Input } from "../Input";
import { Button } from "../Button";
import { Alert } from "../Alert";

export const CardAuth: React.FC<CardAuthProps> = ({
  className,
  handleClickAuth,
  ...rest
}) => {
  const [name, setName] = useState("name", "");
  const [login, setLogin] = useState("login", [""]);
  const [password, setPassword] = useState("password", [""]);
  const [error, setError] = useState("error", null);

  const handleSubmitFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    (async () => {
      try {
        const resp = await fetch("https://0gyog.mocklab.io/users/auth/", {
          method: "POST",
          body: `login=${login[0]}&password=${password[0]}`,
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        const response = await resp.json();
        handleClickAuth(response.user.name);
        setName(response.user.name);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    })();
  };
  const handleButtonAuthClick = () => {};
  return (
    <form
      onSubmit={handleSubmitFrom}
      className={`${styles.cardAuth}  ${className}`}
      {...rest}
    >
      <CardNav isLink />
      <div className={styles.cardFooter}>
        <div className={styles.inputs}>
          {error ? (
            <div className={styles.error}>
              <Alert children="Ой-ёй" image="alert" />{" "}
            </div>
          ) : null}
          <Input
            name="email"
            type="text"
            variant="primary"
            placeholder="Логин или Почта"
            image="email"
            text="Логин или почта"
            id="email"
            htmlFor="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin([e.target.value])
            }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword([e.target.value])
              }
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={handleButtonAuthClick}
            type="submit"
            variant="primary"
          >
            Войти
          </Button>

          <div className={styles.pass}>
            <Button type="submit" variant="dim">
              Не помню пароль
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
