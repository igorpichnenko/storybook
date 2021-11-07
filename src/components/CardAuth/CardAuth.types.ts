import React from 'react';
import { LoginRequest } from '../../stores/Auth/AuthStore';

export type CardAuthProps = {
  handleClickAuth?: (name: string) => void;
  error?: Error;
  login: ({ username, password }: LoginRequest) => void;
  isAuth?: boolean;
  isLoading?: boolean;
} & React.HTMLProps<HTMLFormElement>;
