import { Story, Meta } from '@storybook/react';

import { MemoryRouter } from 'react-router';
import { CardSignIn } from './index';
import { CardSignInProps } from './CardSignIn.types';

export default {
  title: 'CardSignIn',
  component: CardSignIn,
} as Meta;

const Template: Story<CardSignInProps> = (args) => (
  <MemoryRouter>
    <CardSignIn {...args} />{' '}
  </MemoryRouter>
);

export const Default = Template.bind({}) as Story<CardSignInProps>;
Default.args = {
  signIn: () => console.log('signIn'),
};
