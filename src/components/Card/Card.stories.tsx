import React from "react";
import { Story, Meta } from "@storybook/react";

import { Card } from "./index";
import { CardProps } from "./Card.types";
import { CardAuth } from "../CardAuth";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Auth = Template.bind({}) as Story<CardProps>;
Auth.args = {
  children: <CardAuth variant="primary" />,
  variant: "primary",
};
