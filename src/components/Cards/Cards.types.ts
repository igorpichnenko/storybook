import React from 'react';

export type CardsProps = {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;
