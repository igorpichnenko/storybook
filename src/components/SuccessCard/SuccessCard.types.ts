import React from 'react';

export type SuccessCardProps = {
  handleClickOut: () => void;
  image: string;
  alt: string;
} & React.HTMLProps<HTMLDivElement>;
