import React from 'react';

export type CardAuthProps = {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  error?: string
} & React.HTMLProps<HTMLFormElement>;
