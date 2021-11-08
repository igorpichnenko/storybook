import { Story, Meta } from '@storybook/react';

import { Form } from './index';
import { FormProps } from './Form.types';

export default {
  title: 'Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => (
  <Form onSubmit={(e) => e.preventDefault()} {...args} />
);

export const Default = Template.bind({}) as Story<FormProps>;
Default.args = {
  buttonText: 'Войти',
};
export const submit = Template.bind({}) as Story<FormProps>;
submit.args = {
  buttonText: 'Войти',
  isLoading: true,
};
export const error = Template.bind({}) as Story<FormProps>;
error.args = {
  buttonText: 'Войти',
  error: { error_code: 1, error_message: 'Ой-ёй' },
};
