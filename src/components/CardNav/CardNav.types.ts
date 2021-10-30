import React from 'react';

export type CardNavProps = {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;
