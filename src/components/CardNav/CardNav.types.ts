import React from 'react';

export type CardNavProps = {
  isLink?: boolean;
  isSimpleHeader?: boolean;
  signInActiveTab?: boolean;
  loginActiveTab?: boolean;
} & React.HTMLProps<HTMLDivElement>;
