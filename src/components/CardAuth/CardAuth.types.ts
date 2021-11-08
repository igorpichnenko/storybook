import React from 'react';
import { Error, LoginRequest } from '../../stores/Auth/AuthStore';

export type CardAuthProps = {
  error?: Error;
  login: ({ username, password }: LoginRequest) => void;
  isLoading?: boolean;
  loginActiveTab?: boolean;
  signInActiveTab?: boolean;
} & React.HTMLProps<HTMLDivElement>;
