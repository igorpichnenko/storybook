import React from "react";
import { Story, Meta } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import { Cards } from "./index";
import { CardsProps } from "./Cards.types";
import { CardAuth } from "../CardAuth";

export default {
  title: "Cards",
  component: Cards,
} as Meta;

const eventsFromNames = actions("onClick");

const Template: Story<CardsProps> = (args) => (
  <Cards {...eventsFromNames} {...args} />
);

export const Auth = Template.bind({}) as Story<CardsProps>;
Auth.args = {
  children: <CardAuth />,
  variant: "primary",
};
