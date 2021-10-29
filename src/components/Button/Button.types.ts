import React from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'dim';
  children?: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
} & React.HTMLProps<HTMLButtonElement>;
