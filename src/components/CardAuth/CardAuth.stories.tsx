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
Default.args = {};
