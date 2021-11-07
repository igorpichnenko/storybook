import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { LinkComponent } from './index';
import { LinkProps } from './Link.types';

export default {
  title: 'LinkProps',
  component: LinkComponent,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <MemoryRouter>
    <LinkComponent {...args} />
  </MemoryRouter>
);

export const Auth = Template.bind({}) as Story<LinkProps>;
Auth.args = {
  to: '/auth',
  children: 'Вход',
  isActive: true,
  activeTab: false,
};
export const Registration = Template.bind({}) as Story<LinkProps>;
Registration.args = {
  to: '/signIn',
  children: 'Регистрация',
  isActive: false,
  activeTab: false,
};
