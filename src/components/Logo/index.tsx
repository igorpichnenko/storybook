import React from 'react';

import { LogoProps } from './Logo.types';

export const Logo: React.FC<LogoProps> = ({ image, alt = 'my image' }) => (
  <img src={`/${image}.svg`} alt={alt} />
);
