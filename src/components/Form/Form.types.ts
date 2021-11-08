import React from 'react';
import { Inputs } from '.';
import { Error } from '../../stores/Auth/AuthStore';

export type FormProps = {
  children?: React.ReactNode;
  error?: Error;
  isLoading?: boolean;
  handleOnchangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnchangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
  onSubmitHandleForm: (data: Inputs) => void;
} & React.HTMLProps<HTMLFormElement>;
