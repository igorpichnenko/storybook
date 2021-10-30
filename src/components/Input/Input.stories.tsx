import React from "react";
import { Story, Meta } from "@storybook/react";

import { Input } from "./index";
import { InputProps } from "./Input.types";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({}) as Story<InputProps>;
Default.args = {
  type: "text",
  withIcon: true,
  image: "key",
  variant: "primary",
  placeholder: "Логин или почта",
};
