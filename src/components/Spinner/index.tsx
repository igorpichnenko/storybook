import React from 'react';

import { SpinnerProps } from './Spinner.types';
import ClipLoader from 'react-spinners/ClipLoader';

export const Spinner: React.FC<SpinnerProps> = ({ isLoading, styles }) => {
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    ${styles}
  `;
  return <ClipLoader css={override} loading={isLoading} />;
};
