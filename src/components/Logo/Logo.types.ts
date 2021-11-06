import React from 'react';

export type LogoProps = {
  image: string;
  alt: string;
} & React.HTMLProps<HTMLButtonElement>;
