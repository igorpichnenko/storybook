import { MemoryRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';
import { LinkComponent } from './index';
import { LinkProps } from './Link.types';

export default {
  title: 'LinkProps',
  component: LinkComponent,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<LinkProps> = (args) => <LinkComponent {...args} />;

export const Auth = Template.bind({}) as Story<LinkProps>;
Auth.args = {
  to: '/auth',
  children: 'Вход',
  isActive: true,
};
export const Registration = Template.bind({}) as Story<LinkProps>;
Registration.args = {
  to: '/registration',
  children: 'Регистрация',
  isActive: false,
};
