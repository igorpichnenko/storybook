import React from 'react';

export type CardNavProps = {
  children?: React.ReactNode;
  isLink?: boolean
} & React.HTMLProps<HTMLDivElement>;
