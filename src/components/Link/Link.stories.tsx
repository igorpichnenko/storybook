import React from "react";
import { LinkComponent } from "./index";
import { MemoryRouter } from "react-router-dom";
import { Story, Meta } from "@storybook/react";
import { LinkProps } from "./Link.types";
import { Button } from "../Button";

export default {
  title: "LinkProps",
  component: LinkComponent,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <MemoryRouter>
    <LinkComponent {...args} />
  </MemoryRouter>
);

export const Auth = Template.bind({}) as Story<LinkProps>;
Auth.args = {
  to: "/auth",
  children: "Вход",
  isActive: true,
};
export const Registration = Template.bind({}) as Story<LinkProps>;
Registration.args = {
  to: "/registration",
  children: "Регистрация",
  isActive: false,
};
