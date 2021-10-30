import React from "react";

import { CardNavProps } from "./CardNav.types";
import styles from "./CardNav.module.scss";
import { Logo } from "../Logo";
import { LinkComponent } from "../Link";
import { MemoryRouter } from "react-router-dom";

// * Storybook can not catch default export types
export const CardNav: React.FC<CardNavProps> = ({
  variant,
  children,
  className,
  ...rest
}) => (
  <section
    className={`${styles.cardNav} ${`${styles[variant]}`} ${className}`}
    {...rest}
  >
    <MemoryRouter>
      <div className={styles.logotype}>
        <Logo image="logo" />
      </div>
      <div className={styles.links}>
        <LinkComponent to="/auth" children="Вход" isActive />
        <div className={styles.reg}>
          <LinkComponent
            to="/registration"
            children="Регистрация"
            isActive={false}
          />
        </div>
        <span className={styles.activeLine}></span>
      </div>
    </MemoryRouter>
  </section>
);
