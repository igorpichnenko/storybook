import React from 'react';

export type SuccessCardProps = {
  image: string;
  alt: string;
  userName?: string;
  isLoading?: boolean;
  logout: () => void;
} & React.HTMLProps<HTMLDivElement>;
