import React from 'react';
import { Inputs } from '.';
import { Error } from '../../stores/Auth/AuthStore';

export type FormProps = {
  children?: React.ReactNode;
  error?: Error;
  isLoading?: boolean;
  buttonText: string;
  onSubmitHandleForm: (data: Inputs) => void;
} & React.HTMLProps<HTMLFormElement>;
