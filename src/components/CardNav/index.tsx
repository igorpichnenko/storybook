import React from "react";

import { CardNavProps } from "./CardNav.types";
import styles from "./CardNav.module.scss";
import { Logo } from "../Logo";
import { LinkComponent } from "../Link";
import { MemoryRouter } from "react-router-dom";

export const CardNav: React.FC<CardNavProps> = ({
  variant,
  children,
  className,
  isLink,
  ...rest
}) => {
  const noLinkHeader = isLink ? " " : styles.simple;
  return (
    <section
      className={`${
        styles.cardNav
      } ${`${styles[variant]}`} ${className} ${noLinkHeader}`}
      {...rest}
    >
      <MemoryRouter>
        <div className={styles.logotype}>
          <Logo image="logo" />
        </div>
        {isLink ? (
          <div className={styles.links}>
            <LinkComponent to="/auth" children="Вход" isActive />
            <div className={styles.reg}>
              <LinkComponent
                to="/registration"
                children="Регистрация"
                isActive={false}
              />
            </div>
          </div>
        ) : null}
      </MemoryRouter>
    </section>
  );
};
