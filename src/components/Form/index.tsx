import React from 'react';

import { FormProps } from './Form.types';
import styles from './Form.module.scss';

export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return (
    <form className={styles.form} {...rest}>
      {children}
    </form>
  );
};
