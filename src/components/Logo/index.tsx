import React from "react";

import { LogoProps } from "./Logo.types";
import styles from "./Logo.module.scss";

// * Storybook can not catch default export types
export const Logo: React.FC<LogoProps> = ({ image }) => (
  <img className={styles.logo} src={require(`../../public/${image}.svg`)} />
);
