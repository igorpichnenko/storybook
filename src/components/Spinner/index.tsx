import React from 'react';

import { SpinnerProps } from './Spinner.types';
import ClipLoader from 'react-spinners/ClipLoader';

export const Spinner: React.FC<SpinnerProps> = ({ isLoading, style }) => {
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  ${style}`;
  return <ClipLoader css={override} loading={isLoading} />;
};
