import { Story, Meta } from '@storybook/react';

import { Spinner } from './index';
import { SpinnerProps } from './Spinner.types';

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Email = Template.bind({}) as Story<SpinnerProps>;
Email.args = {
  isLoading: false,
};
