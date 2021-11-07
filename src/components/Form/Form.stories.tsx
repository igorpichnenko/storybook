import { Story, Meta } from '@storybook/react';

import { Form } from './index';
import { FormProps } from './Form.types';

export default {
  title: 'Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({}) as Story<FormProps>;
Default.args = {};
