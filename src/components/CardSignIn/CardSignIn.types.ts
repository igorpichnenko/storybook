import React from 'react';
import { Error, LoginRequest } from '../../stores/Auth/AuthStore';

export type CardSignInProps = {
  handleClickAuth?: (name: string) => void;
  error?: Error;
  signIn?: () => void;
  isLoading?: boolean;
  loginActiveTab?: boolean;
  signInActiveTab?: boolean;
} & React.HTMLProps<HTMLFormElement>;
