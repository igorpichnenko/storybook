import React from 'react';

export type InputProps = {
  variant: 'primary' | 'secondary';
  type: 'text' | 'email' | 'password';
  image?: 'key' | 'email';
  error?: string;
  text?: string;
  id?: string;
  htmlFor?: string;
} & React.HTMLProps<HTMLInputElement>;
