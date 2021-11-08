import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { Error } from '../../stores/Auth/AuthStore';
import { Inputs } from '../Form';

export type InputProps = {
  variant: 'primary' | 'secondary';
  type: 'text' | 'email' | 'password';
  image?: 'key' | 'email';
  error?: string;
  text?: string;
  id?: string;
  htmlFor?: string;
  alt: string;
  name: 'password' | 'username';
  formError: {
    password?: FieldError | undefined;
    username?: FieldError | undefined;
  };
  register?: UseFormRegister<Inputs>;
  required?: boolean;
} & React.HTMLProps<HTMLInputElement>;
