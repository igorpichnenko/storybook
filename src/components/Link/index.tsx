import React from "react";
import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

export const LinkComponent = ({ to, children, isActive }) => {
  return (
    <Link
      className={`${styles.link} ${`${styles[isActive ? "isActive" : ""]}`}`}
      to={to}
    >
      {isActive ? <span className={styles.activeLine}></span> : null}
      {children}
    </Link>
  );
};
