import React from 'react';

export type CardAuthProps = {
  handleClickAuth?: (name: string) => void;
  error?: string;
} & React.HTMLProps<HTMLFormElement>;
