import React from 'react';

export type LinkProps = {
  to: string;
  children: string;
  activeTab?: boolean;
  isActive?: boolean;
} & React.HTMLProps<HTMLButtonElement>;
