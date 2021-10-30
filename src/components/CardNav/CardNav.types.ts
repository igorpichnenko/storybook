import React from 'react';

export type CardNavProps = {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
  isLink: boolean
} & React.HTMLProps<HTMLDivElement>;
