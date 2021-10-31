import React from "react";
import { Story, Meta } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import { CardAuth } from "./index";
import { CardAuthProps } from "./CardAuth.types";

export default {
  title: "CardAuth",
  component: CardAuth,
} as Meta;
const eventsFromNames = actions("handleClick");
const Template: Story<CardAuthProps> = (args) => (
  <CardAuth {...eventsFromNames} {...args} />
);

export const Default = Template.bind({}) as Story<CardAuthProps>;
Default.args = {};

export const Error = Template.bind({}) as Story<CardAuthProps>;
Error.args = {
  error: "true",
};
