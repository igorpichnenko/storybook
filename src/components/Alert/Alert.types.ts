import React from 'react';

export type AlertProps = {
  children?: React.ReactNode;
  image: string;
  alt: string;
} & React.HTMLProps<HTMLDivElement>;
