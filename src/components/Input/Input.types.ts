import React from 'react';

export type InputProps = {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
  type: 'text' | 'email' | 'password';
  withIcon?: boolean
  image?: 'key' | 'email'
  error?: string,
  text?: string
} & React.HTMLProps<HTMLInputElement>;
