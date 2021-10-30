import React from 'react';

export type AlertProps = {

  children?: React.ReactNode;

  image: string
} & React.HTMLProps<HTMLDivElement>;
