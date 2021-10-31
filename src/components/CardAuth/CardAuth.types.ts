import React from 'react';

export type CardAuthProps = {
  error?: string
  handleClick?: () => void
} & React.HTMLProps<HTMLFormElement>;
