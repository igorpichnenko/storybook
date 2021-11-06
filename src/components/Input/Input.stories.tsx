import { Story, Meta } from '@storybook/react';

import { Input } from './index';
import { InputProps } from './Input.types';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Email = Template.bind({}) as Story<InputProps>;
Email.args = {
  type: 'email',
  image: 'email',
  variant: 'primary',
  placeholder: 'Логин или почта',
  text: 'Логин или почта',
  id: 'email',
  htmlFor: 'email',
  alt: 'email',
};
export const Password = Template.bind({}) as Story<InputProps>;
Password.args = {
  type: 'password',
  image: 'key',
  variant: 'secondary',
  placeholder: 'Пароль',
  text: 'Пароль',
  id: 'password',
  htmlFor: 'password',
  alt: 'password',
};

export const PasswordError = Template.bind({}) as Story<InputProps>;
PasswordError.args = {
  type: 'password',
  image: 'key',
  variant: 'secondary',
  placeholder: 'Пароль',
  text: 'Пароль',
  error: 'Ой-ёй',
  id: 'password',
  htmlFor: 'password',
  alt: 'password',
};
