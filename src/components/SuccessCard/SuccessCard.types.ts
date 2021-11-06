import React from "react";

export type SuccessCardProps = {
  handleClickOut: () => void;
  image: string;
} & React.HTMLProps<HTMLDivElement>;
