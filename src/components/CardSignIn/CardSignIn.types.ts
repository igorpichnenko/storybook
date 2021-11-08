import React from 'react';
import { Error, LoginRequest } from '../../stores/Auth/AuthStore';
import { Inputs } from '../Form';

export type CardSignInProps = {
  error?: Error;
  onSubmitHandleForm?: (data: Inputs) => void;
  isLoading?: boolean;
  loginActiveTab?: boolean;
  signInActiveTab?: boolean;
} & React.HTMLProps<HTMLDivElement>;
