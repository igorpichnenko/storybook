import React from "react";

export type LinkProps = {
  to: string;
  children: string;
  isActive: boolean;
} & React.HTMLProps<HTMLButtonElement>;
