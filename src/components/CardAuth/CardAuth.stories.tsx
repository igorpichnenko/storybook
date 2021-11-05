import React from 'react';
import { Story, Meta } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { MemoryRouter } from 'react-router';
import { CardAuth } from './index';
import { CardAuthProps } from './CardAuth.types';

export default {
  title: 'CardAuth',
  component: CardAuth,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<CardAuthProps> = (args) => (
  <CardAuth
    handleClickAuth={() => linkTo('SuccessCard')()}
    {...args}
  />
);

export const Default = Template.bind({}) as Story<CardAuthProps>;
Default.args = {};
