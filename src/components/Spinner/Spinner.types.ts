import React from 'react';

export type SpinnerProps = {
  isLoading?: boolean;
  styles?: string;
} & React.HTMLProps<HTMLElement>;
