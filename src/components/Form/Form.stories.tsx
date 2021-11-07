import { Story, Meta } from '@storybook/react';

import { Form } from './index';
import { FormProps } from './Form.types';
import { Input } from '../Input';
import { Button } from '../Button';

export default {
  title: 'Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => (
  <Form onSubmit={(e) => e.preventDefault()} {...args} />
);

export const Default = Template.bind({}) as Story<FormProps>;
Default.args = {
  children: (
    <>
      <Input
        variant="primary"
        type="email"
        image="email"
        alt="email"
        placeholder="email"
      />
      <Input
        variant="secondary"
        type="password"
        image="key"
        alt="password"
        placeholder="password"
      />
      <Button children="Не помню пароль" variant="dim" type="submit" />
    </>
  ),
};
