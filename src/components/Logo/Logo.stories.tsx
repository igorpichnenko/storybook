import React from "react";
import { Story, Meta } from "@storybook/react";

import { Logo } from "./index";
import { LogoProps } from "./Logo.types";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({}) as Story<LogoProps>;
Default.args = {
  image: "logo",
};
