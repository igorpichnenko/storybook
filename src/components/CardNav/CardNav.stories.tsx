import React from "react";
import { Story, Meta } from "@storybook/react";

import { CardNav } from "./index";
import { CardNavProps } from "./CardNav.types";

export default {
  title: "CardNav",
  component: CardNav,
} as Meta;

const Template: Story<CardNavProps> = (args) => <CardNav {...args} />;

export const Default = Template.bind({}) as Story<CardNavProps>;
Default.args = {
  variant: "primary",
  isLink: true,
};
export const noLink = Template.bind({}) as Story<CardNavProps>;
noLink.args = {
  variant: "primary",
  isLink: false,
};
