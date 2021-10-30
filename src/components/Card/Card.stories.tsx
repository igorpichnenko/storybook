import React from "react";
import { Story, Meta } from "@storybook/react";

import { Card } from "./index";
import { CardProps } from "./Card.types";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({}) as Story<CardProps>;
Default.args = {
  children: "L · Button",
  variant: "primary",
};
