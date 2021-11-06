import { Story, Meta } from "@storybook/react";

import { Alert } from "./index";
import { AlertProps } from "./Alert.types";

export default {
  title: "Alert",
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({}) as Story<AlertProps>;
Default.args = {
  children: "Ой-ёй",
  image: "alert",
};
