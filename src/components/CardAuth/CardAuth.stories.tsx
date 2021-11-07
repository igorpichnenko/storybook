import { Story, Meta } from '@storybook/react';

import { MemoryRouter } from 'react-router';
import { CardAuth } from './index';
import { CardAuthProps } from './CardAuth.types';

export default {
  title: 'CardAuth',
  component: CardAuth,
} as Meta;

const Template: Story<CardAuthProps> = (args) => (
  <MemoryRouter>
    <CardAuth {...args} />{' '}
  </MemoryRouter>
);

export const Default = Template.bind({}) as Story<CardAuthProps>;
Default.args = {
  login: () => console.log('login'),
  loginActiveTab: true,
};

export const SubmitForm = Template.bind({}) as Story<CardAuthProps>;
SubmitForm.args = {
  login: () => console.log('login'),
  isLoading: true,
  loginActiveTab: true,
};

export const AuthError = Template.bind({}) as Story<CardAuthProps>;
AuthError.args = {
  login: () => console.log('login'),
  error: { error_message: 'Ой-ёй', error_code: 1 },
  loginActiveTab: true,
};

export const sigInActiveTab = Template.bind({}) as Story<CardAuthProps>;
sigInActiveTab.args = {
  login: () => console.log('login'),
  signInActiveTab: true,
};
