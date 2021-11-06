import React from "react";

import { LogoProps } from "./Logo.types";

export const Logo: React.FC<LogoProps> = ({ image }) => (
  <img src={`/${image}.svg`} alt="my image" />
);
