import React from "react";
import { Story, Meta } from "@storybook/react";

import { CardAuth } from "./index";
import { CardAuthProps } from "./CardAuth.types";

export default {
  title: "CardAuth",
  component: CardAuth,
} as Meta;

const Template: Story<CardAuthProps> = (args) => <CardAuth {...args} />;

export const Default = Template.bind({}) as Story<CardAuthProps>;
Default.args = {
  children: "L · Button",
  variant: "primary",
};

export const Error = Template.bind({}) as Story<CardAuthProps>;
Error.args = {
  children: "L · Button",
  variant: "primary",
  error: "true",
};
