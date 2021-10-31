import React from 'react';

export type CardAuthProps = {
  error?: string
  handleClickAuth?: () => void
} & React.HTMLProps<HTMLFormElement>;
