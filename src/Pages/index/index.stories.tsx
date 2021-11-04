import React from "react";
import { Story, Meta } from "@storybook/react";

import { Index } from "./index";
import { IndexProps } from "./index.types";
import { MemoryRouter } from "react-router";

export default {
  title: "Index",
  component: Index,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<IndexProps> = (args) => <Index {...args} />;

export const Default = Template.bind({}) as Story<IndexProps>;
Default.args = {};
