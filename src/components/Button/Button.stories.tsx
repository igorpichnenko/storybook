import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "./index";
import { ButtonProps } from "./Button.types";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({}) as Story<ButtonProps>;
Default.args = {
  children: "L · Button",
  variant: "primary",
};

export const Secondary = Template.bind({}) as Story<ButtonProps>;
Secondary.args = {
  children: "L · Button",
  variant: "secondary",
};

export const dim = Template.bind({}) as Story<ButtonProps>;
dim.args = {
  children: "Не помню пароль",
  variant: "dim",
};
