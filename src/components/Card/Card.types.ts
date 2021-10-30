import React from 'react';

export type CardProps = {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;
