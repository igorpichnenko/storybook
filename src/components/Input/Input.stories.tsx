import React from "react";
import { Story, Meta } from "@storybook/react";

import { Input } from "./index";
import { InputProps } from "./Input.types";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Email = Template.bind({}) as Story<InputProps>;
Email.args = {
  type: "email",
  withIcon: true,
  image: "email",
  variant: "primary",
  placeholder: "Логин или почта",
  text: "Логин или почта",
  id: "email",
  htmlFor: "email",
};
export const Password = Template.bind({}) as Story<InputProps>;
Password.args = {
  type: "password",
  withIcon: true,
  image: "key",
  variant: "secondary",
  placeholder: "Пароль",
  text: "Пароль",
  id: "password",
  htmlFor: "password",
};

export const PasswordError = Template.bind({}) as Story<InputProps>;
PasswordError.args = {
  type: "password",
  withIcon: true,
  image: "key",
  variant: "secondary",
  placeholder: "Пароль",
  text: "Пароль",
  error: "Ой-ёй",
  id: "password",
  htmlFor: "password",
};