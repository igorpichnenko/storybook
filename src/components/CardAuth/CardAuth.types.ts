import React from 'react';

export type CardAuthProps = {
  handleClickAuth?: (name: string) => void
} & React.HTMLProps<HTMLFormElement>;
